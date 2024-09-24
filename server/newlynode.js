import { I2C } from 'raspi-i2c';

// Constants from the original C++ header file
const UNIT_4RELAY_ADDR = 0x26;
const UNIT_4RELAY_REG = 0x10;
const UNIT_4RELAY_RELAY_REG = 0x11;

class UNIT_4RELAY {
    constructor(busNumber = 1, sda = null, scl = null) {
        this._i2c = new I2C();
        this._sda = sda;
        this._scl = scl;
    }

    write1Byte(address, registerAddress, data) {
        this._i2c.writeByteSync(address, registerAddress, data);
    }

    read1Byte(address, registerAddress) {
        return this._i2c.readByteSync(address, registerAddress);
    }

    begin() {
        // Initialization is handled in the constructor with new I2C instance
        return true; // Assume it always succeeds
    }

    Init(mode) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode);
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, 0);
    }

    switchMode(mode) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode);
    }

    relayAll(state) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0x0f);
    }

    ledAll(state) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0xf0);
    }

    relayWrite(number, state) {
        let StateFromDevice = this.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG);
        if (state === 0) {
            StateFromDevice &= ~(0x01 << number);
        } else {
            StateFromDevice |= (0x01 << number);
        }
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice);
    }

    ledWrite(number, state) {
        let StateFromDevice = this.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG);
        if (state === 0) {
            StateFromDevice &= ~(UNIT_4RELAY_REG << number);
        } else {
            StateFromDevice |= (UNIT_4RELAY_REG << number);
        }
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice);
    }
}

// Usage Example:
const relay = new UNIT_4RELAY();
relay.begin();
relay.Init(0);           // Set mode to Async and turn off all relays
relay.switchMode(1);     // Switch to Sync mode
relay.relayAll(1);       // Turn all relays on
relay.ledAll(1);         // Turn all LEDs on
relay.relayWrite(2, 1);  // Turn on relay 2
relay.ledWrite(1, 0);    // Turn off LED 1