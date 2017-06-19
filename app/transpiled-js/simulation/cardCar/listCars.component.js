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
var ListCars = (function () {
    function ListCars() {
        this.carselect = new core_1.EventEmitter();
    }
    ListCars.prototype.select = function (event, car) {
        this.carselect.emit(car);
        this.cars.forEach(function (element) {
            element.selected = false;
        });
        this.utilitarios.forEach(function (element) {
            element.selected = false;
        });
        car.selected = true;
    };
    return ListCars;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListCars.prototype, "cars", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ListCars.prototype, "utilitarios", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ListCars.prototype, "carselect", void 0);
ListCars = __decorate([
    core_1.Component({
        selector: 'listcars',
        template: "\n    <md-tab-group class=\"tabcenter\">\n        <md-tab label=\"CARROS\" position=\"0\">\n            <div class=\"container\"  layout=\"row\" flex>\n                <div (click)=\"select($event, car)\" class=\"borderCar\" *ngFor=\"let car of cars\" \n                    [style.xs]=\"{'max-width': '100%','max-height':'80%'}\"\n                    [style.sm]=\"{'max-width': '45%'}\"\n                    [style.md]=\"{'max-width': '30%','max-height':'25%'}\"\n                    [style.lg]=\"{'max-width': '23%','max-height':'25%'}\" \n                    [ngClass]=\"{'selectedcar' : car.selected}\" >\n                        <img height=\"95%\" width=\"95%\" [src]=\"car.url\">\n                        <div>\n                    {{car.description | uppercase}}\n                        </div>\n                </div>\n            </div>\n              </md-tab>\n  <md-tab label=\"UTILIT\u00C1RIOS\" position=\"0\">\n              <div class=\"container\"  layout=\"row\" flex>\n                <div (click)=\"select($event, car)\" class=\"borderCar\" *ngFor=\"let car of utilitarios\" \n                    [style.xs]=\"{'max-width': '100%','max-height':'80%'}\"\n                    [style.sm]=\"{'max-width': '45%'}\"\n                    [style.md]=\"{'max-width': '30%','max-height':'25%'}\"\n                    [style.lg]=\"{'max-width': '23%','max-height':'25%'}\" \n                    [ngClass]=\"{'selectedcar' : car.selected}\" >\n                        <img height=\"95%\" width=\"95%\" [src]=\"car.url\">\n                        <div>\n                    {{car.description | uppercase}}\n                        </div>\n                </div>\n            </div>\n              </md-tab>\n              </md-tab-group>\n    ",
        styleUrls: ['app/simulation/cardCar/listcars.component.scss']
    }),
    __metadata("design:paramtypes", [])
], ListCars);
exports.ListCars = ListCars;
//# sourceMappingURL=listCars.component.js.map