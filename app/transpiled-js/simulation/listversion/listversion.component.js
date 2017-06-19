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
var price_dto_1 = require("./../dto/price.dto");
var Version_dto_1 = require("./../dto/Version.dto");
var app_service_1 = require("./../../app.service");
var Simulation_dto_1 = require("./../dto/Simulation.dto");
var core_1 = require("@angular/core");
var ListVersionComponent = (function () {
    function ListVersionComponent(appService) {
        this.appService = appService;
    }
    ListVersionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var buscaver = {};
        buscaver["modelId"] = this.simulation.car.id;
        buscaver["vehicleType"] = "NOVO";
        var carsget = this.appService.xSearchWithData('vehicleVersion', buscaver);
        carsget.subscribe(function (data) {
            var listver = new Array();
            var response = data.json();
            for (var i = 0; i < response.vehicleVersionDtoList.length; i++) {
                var vehicleVer = response.vehicleVersionDtoList[i];
                var ver = new Version_dto_1.Version;
                ver.description = vehicleVer["description"];
                ver.fipe = vehicleVer["fipe"];
                listver.push(ver);
            }
            _this.versions = listver;
            _this.verselect = _this.versions[0];
            _this.changeVersion(_this.verselect);
        }, function (err) {
            console.log(err.json());
        });
    };
    ListVersionComponent.prototype.changeVersion = function (newValue) {
        //reload
        var _this = this;
        var buscaManuYear = {};
        buscaManuYear["description"] = this.verselect.description;
        buscaManuYear["fipe"] = this.verselect.fipe;
        buscaManuYear["vehicleType"] = "NOVO";
        var yearsManuget = this.appService.xSearchWithData('vehicleVersion/manufactureYears', buscaManuYear);
        yearsManuget.subscribe(function (data) {
            var listyear = new Array();
            var response = data.json();
            for (var i = 0; i < response.manufactureYears.length; i++) {
                var vehicleVer = response.manufactureYears[i];
                listyear.push(vehicleVer);
            }
            _this.yearManu = listyear;
            _this.yearSelect = _this.yearManu[_this.yearManu.length - 1];
            _this.changeManuYear(_this.yearSelect);
        }, function (err) {
            console.log(err.json());
        });
    }; // don't forget to update the model here
    // ... do other stuff here ...
    ListVersionComponent.prototype.changeManuYear = function (newValue) {
        var _this = this;
        var buscaModelYear = {};
        buscaModelYear["description"] = this.verselect.description;
        buscaModelYear["fipe"] = this.verselect.fipe;
        buscaModelYear["vehicleType"] = "NOVO";
        buscaModelYear["manufactureYear"] = this.yearSelect;
        var yearsManuget = this.appService.xSearchWithData('vehicleVersion/modelYears', buscaModelYear);
        yearsManuget.subscribe(function (data) {
            var listyear = new Array();
            var response = data.json();
            console.log(response);
            for (var i = 0; i < response.modelYears.length; i++) {
                var vehicleVer = response.modelYears[i];
                var ver = new Version_dto_1.Version;
                ver.id = vehicleVer["versionId"];
                ver.description = _this.verselect.description;
                ver.fipe = _this.verselect.fipe;
                ver.yearManufacture = _this.yearSelect;
                ver.yearModel = vehicleVer["yearModel"];
                listyear.push(ver);
            }
            _this.versionsYears = listyear;
            _this.versionSelected = _this.versionsYears[_this.versionsYears.length - 1];
            _this.getValue(_this.versionSelected);
        }, function (err) {
            console.log(err.json());
        });
    };
    ListVersionComponent.prototype.getValue = function (newValue) {
        var _this = this;
        var valueGet = this.appService.xSearch('vehiculePrice', this.versionSelected.id);
        valueGet.subscribe(function (data) {
            var listyear = new Array();
            var response = data.json();
            var value = response.vehiclePriceDTO;
            _this.valueSelect = new price_dto_1.Price;
            _this.valueSelect.id = value["id"];
            _this.valueSelect.amount = value["amount"];
            _this.versionSelected.price = _this.valueSelect;
            _this.simulation.car.version = _this.versionSelected;
        }, function (err) {
            console.log(err.json());
        });
        console.log(newValue);
    };
    return ListVersionComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Simulation_dto_1.Simulation)
], ListVersionComponent.prototype, "simulation", void 0);
ListVersionComponent = __decorate([
    core_1.Component({
        selector: 'listversion',
        templateUrl: 'app/simulation/listversion/listversion.component.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], ListVersionComponent);
exports.ListVersionComponent = ListVersionComponent;
//# sourceMappingURL=listversion.component.js.map