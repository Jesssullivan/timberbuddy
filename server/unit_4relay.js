"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raspi_i2c_1 = require("raspi-i2c");
// Constants from the original C++ header file
var UNIT_4RELAY_ADDR = 0x26;
var UNIT_4RELAY_REG = 0x10;
var UNIT_4RELAY_RELAY_REG = 0x11;
var UNIT_4RELAY = /** @class */ (function () {
    function UNIT_4RELAY(busNumber, sda, scl) {
        if (busNumber === void 0) { busNumber = 1; }
        if (sda === void 0) { sda = null; }
        if (scl === void 0) { scl = null; }
        this._i2c = new raspi_i2c_1.I2C();
        this._sda = sda;
        this._scl = scl;
    }
    UNIT_4RELAY.prototype.write1Byte = function (address, registerAddress, data) {
        this._i2c.writeByteSync(address, registerAddress, data);
    };
    UNIT_4RELAY.prototype.read1Byte = function (address, registerAddress) {
        return this._i2c.readByteSync(address, registerAddress);
    };
    UNIT_4RELAY.prototype.begin = function () {
        // Initialization is handled in the constructor with new I2C instance
        return true; // Assume it always succeeds
    };
    UNIT_4RELAY.prototype.Init = function (mode) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode);
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, 0);
    };
    UNIT_4RELAY.prototype.switchMode = function (mode) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_REG, mode);
    };
    UNIT_4RELAY.prototype.relayAll = function (state) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0x0f);
    };
    UNIT_4RELAY.prototype.ledAll = function (state) {
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, state * 0xf0);
    };
    UNIT_4RELAY.prototype.relayWrite = function (number, state) {
        var StateFromDevice = this.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG);
        if (state === 0) {
            StateFromDevice &= ~(0x01 << number);
        }
        else {
            StateFromDevice |= (0x01 << number);
        }
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice);
    };
    UNIT_4RELAY.prototype.ledWrite = function (number, state) {
        var StateFromDevice = this.read1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG);
        if (state === 0) {
            StateFromDevice &= ~(UNIT_4RELAY_REG << number);
        }
        else {
            StateFromDevice |= (UNIT_4RELAY_REG << number);
        }
        this.write1Byte(UNIT_4RELAY_ADDR, UNIT_4RELAY_RELAY_REG, StateFromDevice);
    };
    return UNIT_4RELAY;
}());
// Usage Example:
//const relay = new UNIT_4RELAY();
//relay.begin();
//relay.Init(0);           // Set mode to Async and turn off all relays
//relay.switchMode(1);     // Switch to Sync mode
//relay.relayAll(1);       // Turn all relays on
//relay.ledAll(1);         // Turn all LEDs on
//relay.relayWrite(2, 1);  // Turn on relay 2
//relay.ledWrite(1, 0);    // Turn off LED 1
