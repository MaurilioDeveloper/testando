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
var router_1 = require("@angular/router");
var Simulation_dto_1 = require("./../dto/Simulation.dto");
var core_1 = require("@angular/core");
var FormClientComponent = (function () {
    function FormClientComponent(router) {
        this.router = router;
        this.changeStep = new core_1.EventEmitter();
        this.states = [
            { value: 'teste', viewValue: 'Teste' },
            { value: 'teste2', viewValue: 'Teste 2' },
        ];
        this.router = router;
    }
    FormClientComponent.prototype.ngOnInit = function () {
    };
    ;
    FormClientComponent.prototype.change = function (toFront) {
        console.log(this.simulation);
        console.log(this.simulation.saleType.description);
        if (this.simulation.saleType.description == "3") {
            this.simulation.vizualization = true;
        }
        this.changeStep.emit(toFront);
    };
    FormClientComponent.prototype.handelInput = function (valor) {
        console.log(valor.length);
        if (valor.length == 3) {
            // valor = valor.concat(".");
        }
    };
    return FormClientComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Simulation_dto_1.Simulation)
], FormClientComponent.prototype, "simulation", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FormClientComponent.prototype, "changeStep", void 0);
__decorate([
    core_1.HostListener('document:onchange', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FormClientComponent.prototype, "handelInput", null);
FormClientComponent = __decorate([
    core_1.Component({
        selector: 'form-client',
        templateUrl: 'app/simulation/card_client/form_client.component.html',
    }),
    __metadata("design:paramtypes", [router_1.Router])
], FormClientComponent);
exports.FormClientComponent = FormClientComponent;
//# sourceMappingURL=form_client.component.js.map