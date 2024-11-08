import { I2C } from 'raspi-i2c';

const UNIT_EXT_ENCODER_ADDR = 0x59;
const UNIT_EXT_ENCODER_ENCODER_REG = 0x00;
const UNIT_EXT_ENCODER_METER_REG = 0x10;
const UNIT_EXT_ENCODER_METER_STRING_REG = 0x20;
const UNIT_EXT_ENCODER_RESET_REG = 0x30;
const UNIT_EXT_ENCODER_PERIMETER_REG = 0x40;
const UNIT_EXT_ENCODER_PULSE_REG = 0x50;
const UNIT_EXT_ENCODER_ZERO_PULSE_VALUE_REG = 0x60;
const UNIT_EXT_ENCODER_ZERO_MODE_REG = 0x70;
const FIRMWARE_VERSION_REG = 0xFE;
const I2C_ADDRESS_REG = 0xFF;

class UNIT_EXT_ENCODER {
    private _addr: number;
    private _i2c: I2C;

    constructor(addr = UNIT_EXT_ENCODER_ADDR) {
        this._addr = addr;
        this._i2c = new I2C();
    }

    private writeBytes(reg: number, buffer: Buffer) {
        const data = Buffer.concat([Buffer.from([reg]), buffer]);
        this._i2c.writeSync(this._addr, data);
    }

    private readBytes(reg: number, length: number): Buffer {
        this._i2c.writeSync(this._addr, Buffer.from([reg]));
        return this._i2c.readSync(this._addr, length);
    }

    begin(addr = UNIT_EXT_ENCODER_ADDR, speed = 100000): boolean {
        this._addr = addr;
        // The raspi-i2c does not support setting custom SDA/SCL pins or speed in this straightforward manner.
        // If this is necessary, another library or custom driver code would be required.
        try {
            this._i2c.readSync(this._addr, 1); // Check if the device responds.
            return true;
        } catch (e) {
            return false;
        }
    }

    getEncoderValue(): number {
        const data = this.readBytes(UNIT_EXT_ENCODER_ENCODER_REG, 4);
        return data.readUInt32LE(0);
    }

    getZeroPulseValue(): number {
        const data = this.readBytes(UNIT_EXT_ENCODER_ZERO_PULSE_VALUE_REG, 4);
        return data.readUInt32LE(0);
    }

    setZeroPulseValue(value: number) {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt32LE(value, 0);
        this.writeBytes(UNIT_EXT_ENCODER_ZERO_PULSE_VALUE_REG, buffer);
    }

    getMeterValue(): number {
        const data = this.readBytes(UNIT_EXT_ENCODER_METER_REG, 4);
        return data.readUInt32LE(0);
    }

    getMeterString(): string {
        const buffer = this.readBytes(UNIT_EXT_ENCODER_METER_STRING_REG, 9);
        return buffer.toString('utf8').replace(/\0/g, '');
    }

    resetEncoder() {
        this.writeBytes(UNIT_EXT_ENCODER_RESET_REG, Buffer.from([1]));
    }

    setPerimeter(perimeter: number) {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt32LE(perimeter, 0);
        this.writeBytes(UNIT_EXT_ENCODER_PERIMETER_REG, buffer);
    }

    setZeroMode(mode: number) {
        this.writeBytes(UNIT_EXT_ENCODER_ZERO_MODE_REG, Buffer.from([mode]));
    }

    getPerimeter(): number {
        const data = this.readBytes(UNIT_EXT_ENCODER_PERIMETER_REG, 4);
        return data.readUInt32LE(0);
    }

    setPulse(pulse: number) {
        const buffer = Buffer.alloc(4);
        buffer.writeUInt32LE(pulse, 0);
        this.writeBytes(UNIT_EXT_ENCODER_PULSE_REG, buffer);
    }

    getPulse(): number {
        const data = this.readBytes(UNIT_EXT_ENCODER_PULSE_REG, 4);
        return data.readUInt32LE(0);
    }

    getFirmwareVersion(): number {
        const buffer = this.readBytes(FIRMWARE_VERSION_REG, 1);
        return buffer[0];
    }

    setI2CAddress(addr: number): number {
        this.writeBytes(I2C_ADDRESS_REG, Buffer.from([addr]));
        this._addr = addr;
        return this._addr;
    }

    getI2CAddress(): number {
        const buffer = this.readBytes(I2C_ADDRESS_REG, 1);
        return buffer[0];
    }
}



// Usage Example
const encoder = new UNIT_EXT_ENCODER();
if (encoder.begin()) {
    console.log("Encoder initialized successfully");

    encoder.resetEncoder();
    encoder.setZeroPulseValue(600);

    let running = true;

    process.on('SIGTERM', () => {
        running = false;
    });

    const _enc_test = async () => {
        while (running) {
            console.log("Meter Value:", encoder.getMeterValue());
            console.log("Zero Pulse Value:", encoder.getZeroPulseValue());
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    };

    _enc_test();
} else {
    console.error("Failed to initialize encoder");
}