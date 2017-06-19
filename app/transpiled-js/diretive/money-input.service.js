"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoneyInputService = (function () {
    function MoneyInputService(input, options, onchange) {
        this.lastValidValue = '';
        this.triggerChange = (function () {
            return;
        });
        // options = {
        //   allowNegative: true,
        //   precision: 2,
        //   prefix: 'R$ ',
        //   suffix: '',
        //   thousands: '.',
        //   decimal: ',',
        //   allowZero: true,
        //   affixesStay: true
        // };
        this.onchange = function (val) {
            return val;
        };
        this.elementRef = input;
        // this.options = Object.assign({}, this.options, options);
        this.onchange = onchange;
        // this.maskProvider = new MoneyMaskProvider(this.options);
        // this.inputManager = new InputManager(input, this.options);
    }
    Object.defineProperty(MoneyInputService.prototype, "rawValue", {
        get: function () {
            return this.elementRef && this.elementRef.value;
        },
        set: function (value) {
            var _this = this;
            if (this.elementRef) {
                this.elementRef.value = value;
                if (this.onchange) {
                    setTimeout(function () { return _this.onchange(_this.rawValue); }, 1);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInputService.prototype, "value", {
        get: function () {
            return this.maskProvider.clear(this.rawValue);
        },
        set: function (val) {
            this.rawValue = this.maskProvider.fromNumber(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInputService.prototype, "canInputMoreNumbers", {
        get: function () {
            return this.inputManager.canInputMoreNumbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInputService.prototype, "inputSelection", {
        get: function () {
            return this.inputManager.inputSelection;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MoneyInputService.prototype, "emptyValue", {
        get: function () {
            return this.maskProvider.setSymbol(this.maskProvider.defaultMask);
        },
        enumerable: true,
        configurable: true
    });
    MoneyInputService.prototype.init = function () {
        this.elementRef.style.textAlign = 'right';
        this.updateFieldValue(0);
    };
    MoneyInputService.prototype.onChange = function (handler) {
        this.triggerChange = handler || (function () {
            return;
        });
    };
    MoneyInputService.prototype.updateFieldValue = function (startPos) {
        var value = this.rawValue || '';
        var length = value.length;
        value = this.maskProvider.applyMask(value);
        this.inputManager.updateValueAndCursor(value, length, startPos);
    };
    MoneyInputService.prototype.changeSign = function () {
        this.rawValue = this.maskProvider.changeSign(this.rawValue);
    };
    MoneyInputService.prototype.removeSign = function () {
        this.rawValue = this.rawValue.replace('-', '');
    };
    MoneyInputService.prototype.processSpacebar = function (key) {
        var selection = this.inputSelection;
        var startPos = selection.start;
        var endPos = selection.end;
        var value = this.rawValue;
        // sem seleção
        if (startPos === endPos) {
            // espaço
            if (key === 8) {
                var lastNumber = value.split('').reverse().join('').search(/\d/);
                startPos = value.length - lastNumber - 1;
                endPos = startPos + 1;
            }
            else {
                endPos += 1;
            }
        }
        this.rawValue = value.substring(0, startPos) + value.substring(endPos, value.length);
        this.updateFieldValue(startPos);
    };
    MoneyInputService.prototype.reformatField = function () {
        var value = this.rawValue;
        var empty = this.emptyValue;
        if (value === '' || value === empty) {
            //   if (!this.options.allowZero) {
            //     this.rawValue = '';
            //   } else if (!this.options.affixesStay) {
            //     this.rawValue = this.maskProvider.defaultMask;
            //   } else {
            //     this.rawValue = empty;
            //   }
            // } else {
            //   if (!this.options.affixesStay) {
            //     this.rawValue = this.rawValue.replace(this.options.prefix, '').replace(this.options.suffix, '');
            //   }
        }
        if (this.rawValue !== this.lastValidValue) {
            this.triggerChange();
        }
    };
    MoneyInputService.prototype.resetSelection = function () {
        var _this = this;
        var elementRef = this.elementRef;
        if (elementRef.setSelectionRange) {
            length = this.rawValue.length;
            elementRef.setSelectionRange(length, length);
        }
        else {
            var value_1 = this.rawValue;
            setTimeout(function () {
                _this.rawValue = value_1;
            }, 1);
        }
    };
    MoneyInputService.prototype.saveFocusValue = function () {
        this.lastValidValue = this.rawValue;
        this.rawValue = this.maskProvider.apply(this.rawValue);
        var input = this.elementRef;
        if (input.createTextRange) {
            var textRange = input.createTextRange();
            textRange.collapse(false); // set the cursor at the end of the input
            textRange.select();
        }
    };
    MoneyInputService.prototype.waitAndFormat = function () {
        var _this = this;
        setTimeout(function () {
            _this.maskProvider.apply(_this.rawValue);
        }, 1);
    };
    MoneyInputService.prototype.addNumber = function (key) {
        var keyPressedChar = String.fromCharCode(key);
        var selection = this.inputSelection;
        var startPos = selection.start;
        var endPos = selection.end;
        var value = this.rawValue;
        this.rawValue = value.substring(0, startPos) + keyPressedChar + value.substring(endPos, value.length);
        this.updateFieldValue(startPos + 1);
    };
    return MoneyInputService;
}());
exports.MoneyInputService = MoneyInputService;
//# sourceMappingURL=money-input.service.js.map