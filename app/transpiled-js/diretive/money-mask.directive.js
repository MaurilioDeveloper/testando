"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var money_input_event_handler_1 = require("./money-input-event.handler");
var MoneyMaskDirective = (function () {
    function MoneyMaskDirective(ngModel, el) {
        this.ngModel = ngModel;
        this.el = el;
        this.moneyModelChange = new core_1.EventEmitter(true);
        this.moneyMaskOptions = {};
        this.options = {
            allowNegative: true,
            precision: 2,
            prefix: 'R$ ',
            suffix: '',
            thousands: '.',
            decimal: ',',
            allowZero: true,
            affixesStay: true
        };
    }
    MoneyMaskDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        // console.log(changes);
        if ('moneyModel' in changes) {
            var value_1 = (+changes.moneyModel.currentValue || 0).toString();
            setTimeout(function () { return _this.inputEventHandler.setValue(value_1); }, 100);
        }
    };
    MoneyMaskDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.elementRef = this.el.nativeElement;
        this.elementRef.style.textAlign = 'right';
        var options = Object.assign({}, this.options, this.moneyMaskOptions);
        this.inputEventHandler = new money_input_event_handler_1.MoneyInputEventHandler(this.elementRef, options, function (v) {
            if (_this.ngModel) {
                _this.elementRef.dispatchEvent(new Event('input', { 'bubbles': true, 'cancelable': false }));
            }
            _this.moneyModelChange.emit(_this.inputEventHandler.inputService.value);
        });
    };
    MoneyMaskDirective.prototype.handleKeypress = function (e) {
        this.inputEventHandler.handleKeypress(e);
    };
    MoneyMaskDirective.prototype.handleKeydown = function (e) {
        this.inputEventHandler.handleKeydown(e);
    };
    MoneyMaskDirective.prototype.handleBlur = function (e) {
        this.inputEventHandler.handleBlur(e);
    };
    MoneyMaskDirective.prototype.handleFocus = function (e) {
        this.inputEventHandler.handleFocus(e);
    };
    MoneyMaskDirective.prototype.handleClick = function (e) {
        this.inputEventHandler.handleClick(e);
    };
    return MoneyMaskDirective;
}());
__decorate([
    core_1.Output('moneyModelChange'),
    __metadata("design:type", core_1.EventEmitter)
], MoneyMaskDirective.prototype, "moneyModelChange", void 0);
__decorate([
    core_1.Input('moneyModel'),
    __metadata("design:type", Number)
], MoneyMaskDirective.prototype, "moneyModel", void 0);
__decorate([
    core_1.Input('moneyMaskOptions'),
    __metadata("design:type", Object)
], MoneyMaskDirective.prototype, "moneyMaskOptions", void 0);
__decorate([
    core_1.HostListener('keypress', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MoneyMaskDirective.prototype, "handleKeypress", null);
__decorate([
    core_1.HostListener('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MoneyMaskDirective.prototype, "handleKeydown", null);
__decorate([
    core_1.HostListener('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MoneyMaskDirective.prototype, "handleBlur", null);
__decorate([
    core_1.HostListener('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MoneyMaskDirective.prototype, "handleFocus", null);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MoneyMaskDirective.prototype, "handleClick", null);
MoneyMaskDirective = __decorate([
    core_1.Directive({
        selector: '[appMoneyMask]'
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [forms_1.NgModel, core_1.ElementRef])
], MoneyMaskDirective);
exports.MoneyMaskDirective = MoneyMaskDirective;
//# sourceMappingURL=money-mask.directive.js.map