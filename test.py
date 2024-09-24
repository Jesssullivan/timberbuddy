import smbus

# Constants from the original C++ header file
UNIT_4RELAY_ADDR = 0x26
UNIT_4RELAY_REG = 0x10
UNIT_4RELAY_RELAY_REG = 0x11

class UNIT_4RELAY:
    def __init__(self, bus_number=1, sda=None, scl=None):
        self._bus = smbus.SMBus(bus_number)
        self._sda = sda
        self._scl = scl

    def write1Byte(self, address, register_address, data):
        self._bus.write_byte_data(address, register_address, data)

    def read1Byte(self, address, register_address):
        return self._bus.read_byte_data(address, register_address)

    def begin(self):
        # Initialization is handled in __init__ with smbus.SMBus
        return True  # Assume it always succeeds

    def Init(self, mode):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode)
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, 0)

    def switchMode(self, mode):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode)

    def relayAll(self, state):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0x0f)

    def ledAll(self, state):
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0xf0)

    def relayWrite(self, number, state):
        StateFromDevice = self.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG)
        if state == 0:
            StateFromDevice &= ~(0x01 << number)
        else:
            StateFromDevice |= (0x01 << number)
        self.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice)

    def ledWrite(self, number, state):
        StateFromDevice = self.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG)
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