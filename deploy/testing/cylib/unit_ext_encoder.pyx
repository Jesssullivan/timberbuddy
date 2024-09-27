# distutils: language = c++
import time
import smbus
from cpython.bytes cimport PyBytes_FromStringAndSize
from cpython.buffer cimport PyObject_AsReadBuffer
from libc.string cimport memcpy

# Constants from the original C++ header file
cdef int UNIT_EXT_ENCODER_ADDR = 0x59
cdef int UNIT_EXT_ENCODER_ENCODER_REG = 0x00
cdef int UNIT_EXT_ENCODER_METER_REG = 0x10
cdef int UNIT_EXT_ENCODER_METER_STRING_REG = 0x20
cdef int UNIT_EXT_ENCODER_RESET_REG = 0x30
cdef int UNIT_EXT_ENCODER_PERIMETER_REG = 0x40
cdef int UNIT_EXT_ENCODER_PULSE_REG = 0x50
cdef int UNIT_EXT_ENCODER_ZERO_PULSE_VALUE_REG = 0x60
cdef int UNIT_EXT_ENCODER_ZERO_MODE_REG = 0x70
cdef int FIRMWARE_VERSION_REG = 0xFE
cdef int I2C_ADDRESS_REG = 0xFF

cdef class UNIT_EXT_ENCODER:
    cdef smbus.SMBus _bus
    cdef int _addr

    def __cinit__(self, int bus_number=1, int addr=UNIT_EXT_ENCODER_ADDR):
        self._bus = smbus.SMBus(bus_number)
        self._addr = addr

    def writeBytes(self, int addr, int reg, bytes buffer):
        cdef int length = len(buffer)
        cdef const char* c_buffer

        PyObject_AsReadBuffer(buffer, &c_buffer, &length)
        self._bus.write_i2c_block_data(addr, reg, c_buffer[:length])

    def readBytes(self, int addr, int reg, int length):
        return self._bus.read_i2c_block_data(addr, reg, length)

    def begin(self):
        time.sleep(0.01)  # Delay for 10ms
        try:
            self._bus.write_quick(self._addr)
            return True
        except IOError:
            return False

    def getEncoderValue(self):
        cdef bytes data = self.readBytes(self._addr, UNIT_EXT_ENCODER_ENCODER_REG, 4)
        cdef int value = data[0] | (data[1] << 8) | (data[2] << 16) | (data[3] << 24)
        return value

    def getZeroPulseValue(self):
        cdef bytes data = self.readBytes(self._addr, UNIT_EXT_ENCODER_ZERO_PULSE_VALUE_REG, 4)
        cdef int value = data[0] | (data[1] << 8) | (data[2] << 16) | (data[3] << 24)
        return value

    def setZeroPulseValue(self, int value):
        cdef bytes data = bytes([value & 0xff, (value >> 8) & 0xff, (value >> 16) & 0xff, (value >> 24) & 0xff])
        self.writeBytes(self._addr, UNIT_EXT_ENCODER_ZERO_PULSE_VALUE_REG, data)

    def getMeterValue(self):
        cdef bytes data = self.readBytes(self._addr, UNIT_EXT_ENCODER_METER_REG, 4)
        cdef int value = data[0] | (data[1] << 8) | (data[2] << 16) | (data[3] << 24)
        return value

    def getMeterString(self):
        data = self.readBytes(self._addr, UNIT_EXT_ENCODER_METER_STRING_REG, 9)
        return data.decode('utf-8')

    def resetEncoder(self):
        self.writeBytes(self._addr, UNIT_EXT_ENCODER_RESET_REG, bytes([1]))

    def setPerimeter(self, int perimeter):
        data = bytes([perimeter & 0xff, (perimeter >> 8) & 0xff, (perimeter >> 16) & 0xff, (perimeter >> 24) & 0xff])
        self.writeBytes(self._addr, UNIT_EXT_ENCODER_PERIMETER_REG, data)

    def getPerimeter(self):
        cdef bytes data = self.readBytes(self._addr, UNIT_EXT_ENCODER_PERIMETER_REG, 4)
        cdef int value = data[0] | (data[1] << 8) | (data[2] << 16) | (data[3] << 24)
        return value

    def setPulse(self, int pulse):
        data = bytes([pulse & 0xff, (pulse >> 8) & 0xff, (pulse >> 16) & 0xff, (pulse >> 24) & 0xff])
        self.writeBytes(self._addr, UNIT_EXT_ENCODER_PULSE_REG, data)

    def getPulse(self):
        cdef bytes data = self.readBytes(self._addr, UNIT_EXT_ENCODER_PULSE_REG, 4)
        cdef int value = data[0] | (data[1] << 8) | (data[2] << 16) | (data[3] << 24)
        return value

    def setZeroMode(self, int mode):
        self.writeBytes(self._addr, UNIT_EXT_ENCODER_ZERO_MODE_REG, bytes([mode]))

    def getFirmwareVersion(self):
        cdef bytes data = self.readBytes(self._addr, FIRMWARE_VERSION_REG, 1)
        return data[0]

    def setI2CAddress(self, int addr):
        self.writeBytes(self._addr, I2C_ADDRESS_REG, bytes([addr]))
        self._addr = addr
        return self._addr

    def getI2CAddress(self):
        cdef bytes data = self.readBytes(self._addr, I2C_ADDRESS_REG, 1)
        return data[0]

# Usage Example:
if __name__ == "__main__":
    encoder = UNIT_EXT_ENCODER()
    if encoder.begin():
        print("Encoder initialized successfully")
        print("Encoder Value:", encoder.getEncoderValue())
        encoder.setZeroPulseValue(1000)
        print("Zero Pulse Value:", encoder.getZeroPulseValue())
    else:
        print("Failed to initialize encoder")