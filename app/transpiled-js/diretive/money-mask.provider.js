"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MoneyMaskProvider = (function () {
    function MoneyMaskProvider(options) {
        this.options = {
            allowNegative: false,
            precision: 2,
            thousands: ',',
            decimal: '.',
            prefix: '$ ',
            suffix: ''
        };
        this.options = Object.assign({}, this.options, options);
    }
    Object.defineProperty(MoneyMaskProvider.prototype, "defaultMask", {
        get: function () {
            var n = parseFloat('0') / Math.pow(10, this.options.precision);
            return (n.toFixed(this.options.precision)).replace(new RegExp('\\.', 'g'), this.options.decimal);
        },
        enumerable: true,
        configurable: true
    });
    MoneyMaskProvider.prototype.fromNumber = function (value) {
        var _a = this.options, allowNegative = _a.allowNegative, precision = _a.precision, thousands = _a.thousands, decimal = _a.decimal, prefix = _a.prefix, suffix = _a.suffix;
        value = (value || 0);
        if (!allowNegative) {
            value = Math.abs(value);
        }
        var text = (+value || 0).toFixed(precision);
        var _b = text.split('.'), integer = _b[0], dec = _b[1];
        var integerPart = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        var decimalPart = precision <= 0 ? '' : "" + decimal + dec;
        return "" + prefix + integerPart + decimalPart + suffix;
    };
    MoneyMaskProvider.prototype.clear = function (textValue) {
        var value = (textValue || '0');
        var isNegative = value.indexOf('-') !== -1;
        value = Number(value.replace(/[^0-9\.]+/g, "")).toString();
        if (isNegative) {
            value = '-' + value;
        }
        return parseFloat(value);
    };
    MoneyMaskProvider.prototype.applyMask = function (value) {
        var _a = this.options, allowNegative = _a.allowNegative, precision = _a.precision, thousands = _a.thousands, decimal = _a.decimal;
        var negative = (value.indexOf('-') > -1 && allowNegative) ? '-' : '', onlyNumbers = value.replace(/[^0-9]/g, '');
        var integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision), newValue, decimalPart, leadingZeros;
        integerPart = integerPart.replace(/^0*/g, '');
        // separador de milhar
        integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
        if (integerPart === '') {
            integerPart = '0';
        }
        newValue = negative + integerPart;
        if (precision > 0) {
            decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
            leadingZeros = new Array((precision + 1) - decimalPart.length).join('0');
            newValue += decimal + leadingZeros + decimalPart;
        }
        return this.setSymbol(newValue);
    };
    MoneyMaskProvider.prototype.apply = function (value) {
        if (this.options.precision > 0 && value.indexOf(this.options.decimal) < 0) {
            value += this.options.decimal + new Array(this.options.precision + 1).join('0');
        }
        return this.applyMask(value);
    };
    MoneyMaskProvider.prototype.setSymbol = function (value) {
        var _a = this.options, prefix = _a.prefix, suffix = _a.suffix;
        var operator = '';
        if (value.indexOf('-') > -1) {
            value = value.replace('-', '');
            operator = '-';
        }
        return operator + prefix + value + suffix;
    };
    MoneyMaskProvider.prototype.changeSign = function (value) {
        var inputValue = value;
        if (this.options.allowNegative) {
            if (inputValue !== '' && inputValue.charAt(0) === '-') {
                return inputValue.replace('-', '');
            }
            else {
                return '-' + inputValue;
            }
        }
        else {
            return inputValue;
        }
    };
    return MoneyMaskProvider;
}());
exports.MoneyMaskProvider = MoneyMaskProvider;
//# sourceMappingURL=money-mask.provider.js.map