"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var acessoriesOptions_dialog_1 = require("./acessoriesOptionsDialog/acessoriesOptions.dialog");
var brlDiretive_1 = require("./../commons/value/brlDiretive");
var brlpipe_1 = require("./../commons/value/brlpipe");
var new_ones_component_1 = require("./new_ones/new_ones.component");
var form_client_component_1 = require("./card_client/form_client.component");
var listversion_component_1 = require("./listversion/listversion.component");
var forms_1 = require("@angular/forms");
var simulationInfo_component_1 = require("./simulationInfo/simulationInfo.component");
var simulation_component_1 = require("./simulation.component");
var core_1 = require("@angular/core");
var listCars_component_1 = require("./cardCar/listCars.component");
var carselect_component_1 = require("./carselect/carselect.component");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
exports.SimulationComponents = {
    components: [simulation_component_1.SimulationComponent,
        listCars_component_1.ListCars, carselect_component_1.CarselectComponent, simulationInfo_component_1.SimulationInfoComponent, form_client_component_1.FormClientComponent, listversion_component_1.ListVersionComponent, new_ones_component_1.NewOnesComponent
    ],
};
var SimulationModule = (function () {
    function SimulationModule() {
    }
    return SimulationModule;
}());
SimulationModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, material_1.MaterialModule, material_1.MdRadioModule, material_1.MdDialogModule],
        declarations: [simulationInfo_component_1.SelectTcDialog, acessoriesOptions_dialog_1.AcessoriesOptionsDialog, brlpipe_1.BrlPipe, brlDiretive_1.BrlPipeDirective],
        bootstrap: [simulationInfo_component_1.SelectTcDialog, acessoriesOptions_dialog_1.AcessoriesOptionsDialog],
        exports: [brlpipe_1.BrlPipe, material_1.MaterialModule],
    })
], SimulationModule);
exports.SimulationModule = SimulationModule;
//# sourceMappingURL=simulation.module.js.map