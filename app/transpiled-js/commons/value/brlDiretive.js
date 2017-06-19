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
var BrlPipeDirective = (function () {
    function BrlPipeDirective(elementRef, currencyPipe) {
        this.elementRef = elementRef;
        this.currencyPipe = currencyPipe;
        this.el = this.elementRef.nativeElement;
    }
    BrlPipeDirective.prototype.ngOnInit = function () {
        this.el.value = this.currencyPipe.transform(this.el.value);
    };
    BrlPipeDirective.prototype.onFocus = function (value) {
        this.el.value = this.currencyPipe.parse(value); // opossite of transform
    };
    BrlPipeDirective.prototype.onBlur = function (value) {
        this.el.value = this.currencyPipe.transform(value);
    };
    return BrlPipeDirective;
}());
__decorate([
    core_1.HostListener("focus", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrlPipeDirective.prototype, "onFocus", null);
__decorate([
    core_1.HostListener("blur", ["$event.target.value"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BrlPipeDirective.prototype, "onBlur", null);
BrlPipeDirective = __decorate([
    core_1.Directive({ selector: "[brlformater]" }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        brlpipe_1.BrlPipe])
], BrlPipeDirective);
exports.BrlPipeDirective = BrlPipeDirective;
//# sourceMappingURL=brlDiretive.js.map