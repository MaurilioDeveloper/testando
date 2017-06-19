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
var ModelComponent = (function () {
    function ModelComponent() {
        this.btnHideMarca = false;
        this.btnHideModelo = false;
        this.btnHideVersao = false;
        this.varBtnMarca = 'keyboard_arrow_down';
        this.varBtnModelo = 'keyboard_arrow_down';
        this.varBtnVersao = 'keyboard_arrow_down';
        this.marcas = [
            { value: 'nissan-0', viewValue: 'Nissan' },
            { value: 'renault-1', viewValue: 'Renault' }
        ];
        this.modelos = [
            { value: 'teste-0', viewValue: 'Teste' },
            { value: 'teste-1', viewValue: 'Teste2' }
        ];
        this.versoes = [
            { value: 'teste-0', viewValue: 'Teste' },
            { value: 'teste-1', viewValue: 'Teste2' }
        ];
    }
    ;
    ModelComponent.prototype.clicked = function (event) {
        switch (event) {
            case '1':
                if (this.btnHideMarca == true) {
                    this.btnHideMarca = false;
                    this.varBtnMarca = 'keyboard_arrow_down';
                }
                else {
                    this.btnHideMarca = true;
                    this.varBtnMarca = 'keyboard_arrow_up';
                    this.varBtnModelo = 'keyboard_arrow_down';
                    this.varBtnVersao = 'keyboard_arrow_down';
                }
                this.btnHideModelo = false;
                this.btnHideVersao = false;
                break;
            case '2':
                if (this.btnHideModelo == true) {
                    this.btnHideModelo = false;
                    this.varBtnModelo = 'keyboard_arrow_down';
                }
                else {
                    this.btnHideModelo = true;
                    this.varBtnModelo = 'keyboard_arrow_up';
                    this.varBtnMarca = 'keyboard_arrow_down';
                    this.varBtnVersao = 'keyboard_arrow_down';
                }
                this.btnHideMarca = false;
                this.btnHideVersao = false;
                break;
            case '3':
                if (this.btnHideVersao == true) {
                    this.btnHideVersao = false;
                    this.varBtnVersao = 'keyboard_arrow_down';
                }
                else {
                    this.btnHideVersao = true;
                    this.varBtnVersao = 'keyboard_arrow_up';
                    this.varBtnMarca = 'keyboard_arrow_down';
                    this.varBtnModelo = 'keyboard_arrow_down';
                }
                this.btnHideMarca = false;
                this.btnHideModelo = false;
                break;
            default:
                break;
        }
    };
    return ModelComponent;
}());
ModelComponent = __decorate([
    core_1.Component({
        selector: 'model',
        templateUrl: './app/model/model.component.html'
    }),
    __metadata("design:paramtypes", [])
], ModelComponent);
exports.ModelComponent = ModelComponent;
;
//# sourceMappingURL=model.component.js.map