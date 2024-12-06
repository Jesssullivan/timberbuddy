import { I2C } from 'raspi-i2c';

// Constants from the original C++ header file
const UNIT_4RELAY_ADDR = 0x26;
const UNIT_4RELAY_REG = 0x10;
const UNIT_4RELAY_RELAY_REG = 0x11;

export default class UNIT_4RELAY {
    private _i2c: I2C;
    private _sda: number | null;
    private _scl: number | null;

    constructor(busNumber: number = 1, sda: number | null = null, scl: number | null = null) {
        this._i2c = new I2C();
        this._sda = sda;
        this._scl = scl;
    }

    write1Byte(address: number, registerAddress: number, data: number): void {
        this._i2c.writeByteSync(address, registerAddress, data);
    }

    read1Byte(address: number, registerAddress: number): number {
        return this._i2c.readByteSync(address, registerAddress);
    }

    begin(): boolean {
        // Initialization is handled in the constructor with new I2C instance
        return true; // Assume it always succeeds
    }

    Init(mode: number): void {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode);
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, 0);
    }

    switchMode(mode: number): void {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode);
    }

    relayAll(state: number): void {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0x0f);
    }

    ledAll(state: number): void {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0xf0);
    }

    relayWrite(number: number, state: number): void {
        let StateFromDevice = this.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG);
        if (state === 0) {
            StateFromDevice &= ~(0x01 << number);
        } else {
            StateFromDevice |= (0x01 << number);
        }
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice);
    }

    ledWrite(number: number, state: number): void {
        let StateFromDevice = this.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG);
        if (state === 0) {
            StateFromDevice &= ~(UNIT_4RELAY_REG << number);
        } else {
            StateFromDevice |= (UNIT_4RELAY_REG << number);
        }
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice);
    }
}


