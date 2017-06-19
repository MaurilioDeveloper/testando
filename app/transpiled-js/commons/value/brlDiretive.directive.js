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
Object.defineProperty(exports, "__esModule", { value: true });
var brlpipe_1 = require("./brlpipe");
var core_1 = require("@angular/core");
var BrlDirective = (function () {
    function BrlDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.ngModelChange = new core_1.EventEmitter();
        this.el = this.elementRef.nativeElement;
    }
    BrlDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value);
    };
    BrlDirective.prototype.onFocus = function (value) {
        // this.el.value = this.currencyPipe.parse(value); // opossite of transform
    };
    BrlDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value);
        // this.ngModelChange.emit(this.el.value);
        // console.log(this.el.value);
    };
    BrlDirective.prototype.onKeyup = function ($event) {
        console.log($event.target.value);
        this.ngModelChange.emit($event.target.value);
        // $event.target.value = valor;
    };
    return BrlDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BrlDirective.prototype, "ngModelChange", void 0);
__decorate([
    core_1.HostListener("focus", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrlDirective.prototype, "onFocus", null);
__decorate([
    core_1.HostListener("blur", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrlDirective.prototype, "onBlur", null);
__decorate([
    core_1.HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrlDirective.prototype, "onKeyup", null);
BrlDirective = __decorate([
    core_1.Directive({ selector: "[brlformater]" }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        brlpipe_1.BrlPipe])
], BrlDirective);
exports.BrlDirective = BrlDirective;
//# sourceMappingURL=brlDiretive.directive.js.map