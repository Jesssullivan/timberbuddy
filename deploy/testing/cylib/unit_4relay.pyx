# distutils: language = c++
import smbus

# Constants from the original C++ header file
cdef int UNIT_4RELAY_ADDR = 0x26
cdef int UNIT_4RELAY_REG = 0x10
cdef int UNIT_4RELAY_RELAY_REG = 0x11

cdef class UNIT_4RELAY:
    cdef smbus.SMBus _bus
    cdef int _sda
    cdef int _scl

    def __cinit__(self, int bus_number=1, int sda=None, int scl=None):
        self._bus = smbus.SMBus(bus_number)
        self._sda = sda
        self._scl = scl

    def write1Byte(self, int address, int register_address, int data):
        self._bus.write_byte_data(address, register_address, data)

    def read1Byte(self, int address, int register_address) -> int:
        return self._bus.read_byte_data(address, register_address)

    def begin(self) -> bool:
        # Initialization is handled in __init__ with smbus.SMBus
        return True  # Assume it always succeeds

    def Init(self, int mode):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode)
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, 0)

    def switchMode(self, int mode):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode)

    def relayAll(self, int state):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0x0f)

    def ledAll(self, int state):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0xf0)

    def relayWrite(self, int number, int state):
        cdef int StateFromDevice = self.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG)
        if state == 0:
            StateFromDevice &= ~(0x01 << number)
        else:
            StateFromDevice |= (0x01 << number)
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice)

    def ledWrite(self, int number, int state):
        cdef int StateFromDevice = self.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG)
        if state == 0:
            StateFromDevice &= ~(UNIT_4RELAY_REG << number)
        else:
            StateFromDevice |= (UNIT_4RELAY_REG << number)
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice)

# Usage Example:
if __name__ == "__main__":
    relay = UNIT_4RELAY()
    relay.begin()
    relay.Init(0)           # Set mode to Async and turn off all relays
    relay.switchMode(1)     # Switch to Sync mode
    relay.relayAll(1)       # Turn all relays on
    relay.ledAll(1)         # Turn all LEDs on
    relay.relayWrite(2, 1)  # Turn on relay 2
    relay.ledWrite(1, 0)    # Turn off LED 1