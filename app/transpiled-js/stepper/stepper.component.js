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
var StepperComponent = (function () {
    /**/
    function StepperComponent() {
        this.changeStep = new core_1.EventEmitter();
    }
    StepperComponent.prototype.change = function (toFront) {
        this.changeStep.emit(toFront);
    };
    StepperComponent.prototype.ngOnChanges = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        switch (this.steep) {
            case 0:
                this.rightIcon = 'directions_car';
                this.rightText = 'Editar <br>Veiculo';
                this.stepFour = 'stepNo';
                break;
            case 1:
                this.leftIcon = 'person';
                this.leftText = 'Editar <br>Cliente';
                this.rightIcon = 'keyboard';
                this.rightText = 'Editar <br>Simulação';
                this.stepFour = 'stepNo';
                break;
            case 2:
                this.leftIcon = 'directions_car';
                this.leftText = 'Editar <br>Veiculo';
                this.rightIcon = 'recent_actors';
                this.rightText = 'Ficha do  <br>Cliente';
                this.stepFour = 'stepNo';
                break;
            case 3:
                this.leftIcon = 'keyboard';
                this.leftText = 'Editar <br>Simulação';
                this.rightIcon = 'near_me';
                this.rightText = 'Enviar <br>Proposta';
                this.stepFour = 'stepNo';
                break;
            case 4:
                this.leftIcon = 'near_me';
                this.leftText = 'Voltar para<br>Envio';
                this.rightIcon = 'description';
                this.rightText = 'Documentação<br>Disponível';
                this.stepFour = 'stepFour';
                break;
            default:
                break;
        }
        console.log(this.steep);
    };
    ;
    return StepperComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], StepperComponent.prototype, "steep", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StepperComponent.prototype, "changeStep", void 0);
StepperComponent = __decorate([
    core_1.Component({
        selector: 'stepper',
        templateUrl: './app/stepper/stepper.component.html'
    }),
    __metadata("design:paramtypes", [])
], StepperComponent);
exports.StepperComponent = StepperComponent;
//# sourceMappingURL=stepper.component.js.map