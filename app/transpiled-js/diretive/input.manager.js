"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = (function () {
    function InputManager(input, options) {
        this.input = input;
        this.options = options;
    }
    Object.defineProperty(InputManager.prototype, "rawValue", {
        get: function () {
            return this.input && this.input.value;
        },
        set: function (value) {
            if (this.input) {
                this.input.value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "canInputMoreNumbers", {
        get: function () {
            var input = this.input;
            var maxlength = input.maxLength;
            var haventReachedMaxLength = !(this.rawValue.length >= maxlength && maxlength >= 0);
            var selection = this.inputSelection;
            var start = selection.start;
            var end = selection.end;
            var haveNumberSelected = !!(selection.start !== selection.end && input.value.substring(start, end).match(/\d/));
            var startWithZero = (input.value.substring(0, 1) === '0');
            return haventReachedMaxLength || haveNumberSelected || startWithZero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InputManager.prototype, "inputSelection", {
        get: function () {
            var el = this.input;
            var start = 0;
            var end = 0;
            if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
                start = el.selectionStart;
                end = el.selectionEnd;
            }
            else {
                var range = document.selection.createRange(); //
                if (range && range.parentElement() === el) {
                    var len = el.value.length;
                    var normalizedValue = el.value.replace(/\r\n/g, '\n');
                    // Create a working TextRange that lives only in the input
                    var textInputRange = el.createTextRange();
                    textInputRange.moveToBookmark(range.getBookmark());
                    // Check if the start and end of the selection are at the very end
                    // of the input, since moveStart/moveEnd doesn't return what we want
                    // in those cases
                    var endRange = el.createTextRange();
                    endRange.collapse(false);
                    if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
                        start = end = len;
                    }
                    else {
                        start = -textInputRange.moveStart('character', -len);
                        start += normalizedValue.slice(0, start).split('\n').length - 1;
                        if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
                            end = len;
                        }
                        else {
                            end = -textInputRange.moveEnd('character', -len);
                            end += normalizedValue.slice(0, end).split('\n').length - 1;
                        }
                    }
                }
            }
            return {
                start: start,
                end: end
            };
        },
        enumerable: true,
        configurable: true
    });
    InputManager.prototype.updateValueAndCursor = function (value, oldLen, startPos) {
        var length = oldLen;
        this.rawValue = value;
        var newLength = value.length;
        startPos = startPos - (length - newLength);
        this.setCursorAt(startPos);
    };
    InputManager.prototype.setCursorAt = function (pos) {
        var elem = this.input;
        if (elem.setSelectionRange) {
            elem.focus();
            elem.setSelectionRange(pos, pos);
        }
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    return InputManager;
}());
exports.InputManager = InputManager;
//# sourceMappingURL=input.manager.js.map