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
var material_1 = require("@angular/material");
var Simulation_dto_1 = require("./../dto/Simulation.dto");
var core_1 = require("@angular/core");
var SimulationInfoComponent = (function () {
    function SimulationInfoComponent(dialog) {
        this.dialog = dialog;
    }
    SimulationInfoComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(SelectTcDialog);
        dialogRef.componentInstance.tc = this.simulation.tc;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.simulation.tc = result;
        });
    };
    SimulationInfoComponent.prototype.ngOnInit = function () {
    };
    return SimulationInfoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Simulation_dto_1.Simulation)
], SimulationInfoComponent.prototype, "simulation", void 0);
SimulationInfoComponent = __decorate([
    core_1.Component({
        selector: 'simulationInfo',
        templateUrl: 'app/simulation/simulationinfo/simulationInfo.component.html',
        styleUrls: ['app/simulation/simulationinfo/tc-select-dialog.scss']
    }),
    __metadata("design:paramtypes", [material_1.MdDialog])
], SimulationInfoComponent);
exports.SimulationInfoComponent = SimulationInfoComponent;
var SelectTcDialog = (function () {
    function SelectTcDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return SelectTcDialog;
}());
SelectTcDialog = __decorate([
    core_1.Component({
        selector: 'opem-tc-dialog',
        templateUrl: 'app/simulation/simulationinfo/tc-select-dialog.html'
    }),
    __metadata("design:paramtypes", [material_1.MdDialogRef])
], SelectTcDialog);
exports.SelectTcDialog = SelectTcDialog;
//# sourceMappingURL=simulationInfo.component.js.map