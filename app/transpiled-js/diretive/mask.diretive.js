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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var OmegaMaskDirective = OmegaMaskDirective_1 = (function () {
    function OmegaMaskDirective() {
        this.ngModelChange = new core_1.EventEmitter();
    }
    OmegaMaskDirective.prototype.writeValue = function (value) {
    };
    OmegaMaskDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    OmegaMaskDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    OmegaMaskDirective.prototype.onKeyup = function ($event) {
        var valor = $event.target.value.replace(/\D/g, '');
        var pad = this.omegaMask.replace(/\D/g, '').replace(/9/g, '_');
        var valorMask = valor + pad.substring(0, pad.length - valor.length);
        console.log(valor);
        console.log(valorMask);
        this.ngModelChange.emit(valor);
        // retorna caso pressionado backspace
        if ($event.keyCode === 8) {
            // this.onChange(valor);
            return;
        }
        if (valor.length <= pad.length) {
            // this.onChange(valor);
        }
        var valorMaskPos = 0;
        valor = '';
        for (var i = 0; i < this.omegaMask.length; i++) {
            if (isNaN(parseInt(this.omegaMask.charAt(i)))) {
                valor += this.omegaMask.charAt(i);
            }
            else {
                valor += valorMask[valorMaskPos++];
            }
        }
        if (valor.indexOf('_') > -1) {
            valor = valor.substr(0, valor.indexOf('_'));
        }
        $event.target.value = valor;
    };
    OmegaMaskDirective.prototype.onBlur = function ($event) {
        console.log($event.target.value.length);
        console.log(this.omegaMask.length);
        if ($event.target.value.length === this.omegaMask.length) {
            return $event.target.value;
        }
        this.onChange('');
        // $event.target.value = '';
    };
    return OmegaMaskDirective;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], OmegaMaskDirective.prototype, "ngModelChange", void 0);
__decorate([
    core_1.Input('omegamask'),
    __metadata("design:type", String)
], OmegaMaskDirective.prototype, "omegaMask", void 0);
__decorate([
    core_1.HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OmegaMaskDirective.prototype, "onKeyup", null);
__decorate([
    core_1.HostListener('blur', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OmegaMaskDirective.prototype, "onBlur", null);
OmegaMaskDirective = OmegaMaskDirective_1 = __decorate([
    core_1.Directive({
        selector: '[omegamask]',
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: OmegaMaskDirective_1,
                multi: true
            }]
    })
], OmegaMaskDirective);
exports.OmegaMaskDirective = OmegaMaskDirective;
var OmegaMaskDirective_1;
//# sourceMappingURL=mask.diretive.js.map