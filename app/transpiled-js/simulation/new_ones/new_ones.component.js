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
var Acessorio_dto_1 = require("./../dto/Acessorio.dto");
var Simulation_dto_1 = require("./../dto/Simulation.dto");
var core_1 = require("@angular/core");
var NewOnesComponent = (function () {
    function NewOnesComponent() {
        this.changeStep = new core_1.EventEmitter();
        this.acessorios = new Array;
        this.rawChange = new core_1.EventEmitter();
        this.accessory = false;
        this.states = [
            { value: 'teste', viewValue: 'Teste' },
            { value: 'teste2', viewValue: 'Teste 2' },
        ];
        this.brands = [
            { value: 'renault', viewValue: 'Renault' },
            { value: 'rci', viewValue: 'RCI' },
            { value: 'nissan', viewValue: 'Nissan' }
        ];
        this.models = [
            { value: 'clio', viewValue: 'Clio' },
            { value: 'duster', viewValue: 'Duster' },
            { value: 'nissan', viewValue: 'Nissan' }
        ];
    }
    NewOnesComponent.prototype.ngOnInit = function () {
        this.addAcessorio();
    };
    ;
    NewOnesComponent.prototype.onKeyup = function ($event) {
        console.log($event);
        // $event.target.value = valor;
    };
    NewOnesComponent.prototype.addAcessorio = function () {
        this.acessorios.push(new Acessorio_dto_1.Acessorio);
    };
    NewOnesComponent.prototype.delAcessorio = function (acessorio) {
        var index = this.acessorios.indexOf(acessorio);
        if (index !== -1) {
            this.acessorios.splice(index, 1);
        }
    };
    return NewOnesComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Simulation_dto_1.Simulation)
], NewOnesComponent.prototype, "simulation", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NewOnesComponent.prototype, "changeStep", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], NewOnesComponent.prototype, "rawChange", void 0);
__decorate([
    core_1.HostListener('keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NewOnesComponent.prototype, "onKeyup", null);
NewOnesComponent = __decorate([
    core_1.Component({
        selector: 'new-ones',
        templateUrl: 'app/simulation/new_ones/new_ones.component.html',
    }),
    __metadata("design:paramtypes", [])
], NewOnesComponent);
exports.NewOnesComponent = NewOnesComponent;
//# sourceMappingURL=new_ones.component.js.map