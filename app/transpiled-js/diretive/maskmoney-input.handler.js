"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maskmoney_input_service_1 = require("./maskmoney-input.service");
// import {MoneyInputService} from './money-input.service';
var MoneyInputEventHandler = (function () {
    function MoneyInputEventHandler(input, options, onchange) {
        this.input = input;
        this.inputService = new maskmoney_input_service_1.MoneyInputService(input, options, onchange);
    }
    MoneyInputEventHandler.prototype.setValue = function (value) {
        this.inputService.value = value;
    };
    MoneyInputEventHandler.prototype.handleKeypress = function (e) {
        var inputService = this.inputService;
        var key = e.which || e.charCode || e.keyCode;
        if (key === undefined) {
            return false;
        }
        if (key < 48 || key > 57) {
            // -(minus) key
            if (key === 45) {
                inputService.changeSign();
                return false;
                // +(plus) key
            }
            else if (key === 43) {
                inputService.removeSign();
                return false;
                // enter key or tab key
            }
            else if (key === 13 || key === 9) {
                return true;
            }
            else {
                e.preventDefault();
                return true;
            }
        }
        else if (!inputService.canInputMoreNumbers) {
            return false;
        }
        else {
            e.preventDefault();
            inputService.addNumber(key);
            return false;
        }
    };
    MoneyInputEventHandler.prototype.handleKeydown = function (e) {
        var inputService = this.inputService;
        var key = e.which || e.charCode || e.keyCode;
        if (key === undefined) {
            return false;
        }
        // space or delete
        if (key === 8 || key === 46 || key === 63272) {
            e.preventDefault();
            inputService.processSpacebar(key);
            return false;
        }
        else if (key === 9) {
            return true;
        }
        else {
            return true;
        }
    };
    MoneyInputEventHandler.prototype.handleBlur = function (e) {
        this.inputService.reformatField();
    };
    MoneyInputEventHandler.prototype.handleClick = function (e) {
        this.inputService.resetSelection();
    };
    MoneyInputEventHandler.prototype.handleFocus = function (e) {
        this.inputService.saveFocusValue();
    };
    MoneyInputEventHandler.prototype.handleCutPastEvent = function (e) {
        this.inputService.waitAndFormat();
    };
    return MoneyInputEventHandler;
}());
exports.MoneyInputEventHandler = MoneyInputEventHandler;
//# sourceMappingURL=maskmoney-input.handler.js.map