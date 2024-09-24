import { I2C } from 'raspi-i2c';

let ADDR_I2C_4RELAY = 0x26;

class RelayController {

    constructor() {
        this.i2c = new I2C();
        console.log(this.i2c.readByteSync(ADDR_I2C_4RELAY)); // Read one byte from the device at address 18
    }

    /**
     * Read state of 2 registers (0x10 & 0x11)
     * @return {number} High byte: register 0x10, Low byte: register 0x11
     */
    readState = () => {
        let state = (this.read4R(0x10)) & 0x00FF;
        state <<= 8;
        state |= (this.read4R(0x11)) & 0x00FF;
        return state;
    }

    /**
     * Get state of relay #
     * @param {number} relayNB - Relay number (0-3)
     * @return {boolean} true=ON, false=OFF
     */
    getStateRelayNb = (relayNB) => {
        let test = 1;
        test <<= relayNB;
        test &= (this.read4R(0x11)) & 0x0F;
        return test !== 0;
    }

    /**
     * Set relays and their LEDs sync or async.
     * @param {boolean} syncMode - true: LEDs & relays Sync, false: LEDs & relays Async
     */
    syncMode = () => {
        this.write4R(0x11, 1);
    }

    /**
     * Relays and LEDs will be set to OFF
     */
    allOff = () => {
        this.i2c.writeByte(ADDR_I2C_4RELAY, 0x11, 0x00);
    }

    allOn = () => {
        this.i2c.writeByte(ADDR_I2C_4RELAY, 0x10, 0x00);
    }

    /**
     * Set relays ON or OFF
     * @param {number} number - Relay number (0 or 1 or 2 or 3)
     * @param {boolean} state - true=ON, false=OFF
     */
    write4Relay = (number, state) => {
        let stateRelayLED = this.read4R(0x11);
        if (state) {
            stateRelayLED |= (0x01 << number);
        } else {
            stateRelayLED &= ~(0x01 << number);
        }
        console.log(stateRelayLED);
        this.write4R(0x10, stateRelayLED);
    }


    write4R = (regAddr, data) => {
        this.i2c.writeSync(ADDR_I2C_4RELAY, regAddr, Buffer.alloc(8, data));
    }


    read4R = (regAddr) => {
        return this.i2c.readSync(ADDR_I2C_4RELAY, regAddr);
    }
}

export default RelayController;

const RelayUnit = new RelayController()
//RelayUnit.write4R(0)
console.log(RelayUnit.read4R(0x11))



// console.log(RelayUnit.read4R(0x10))
// console.log(0x01 << 1)