"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var core_2 = require("@angular/core");
var material_1 = require("@angular/material");
var acessoriesOptions_dialog_1 = require("./../acessoriesOptionsDialog/acessoriesOptions.dialog");
var app_service_1 = require("./../../app.service");
var Car_dto_1 = require("./../dto/Car.dto");
var Simulation_dto_1 = require("./../dto/Simulation.dto");
var core_3 = require("@angular/core");
var CarselectComponent = (function () {
    function CarselectComponent(appService, dialog) {
        this.appService = appService;
        this.dialog = dialog;
        this.changeStep = new core_1.EventEmitter();
    }
    CarselectComponent.prototype.carselect = function (car) {
        this.showcar = false;
        if (this.simulation.car) {
            if (car.id === this.simulation.car.id && car.gender === this.simulation.car.gender) {
                return;
            }
        }
        this.simulation.car = car;
    };
    // idBrand nissan 63  HOt_Tjfj2ySFLtVj9Jt6Kw
    // idBrand renault 68  R2q8eId7z_MHQOCUIyD_tg
    CarselectComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.simulation.car) {
            console.log(this.simulation.car.id);
        }
        this.showcar = true;
        var buscacar = {};
        buscacar["idBrand"] = "R2q8eId7z_MHQOCUIyD_tg";
        buscacar["vehicleType"] = "NOVO";
        var buscautilitarios = __assign({}, buscacar);
        buscacar["vehicleGender"] = "PARTICULAR";
        buscautilitarios["vehicleGender"] = "UTILITARIO";
        var carsget = this.appService.xSearchWithData('vehiculeModel/gender', buscacar);
        carsget.subscribe(function (data) {
            var response = data.json();
            _this.cars = _this.getCarsWithGender(response.listVehicleModel, buscacar["vehicleGender"]);
        }, function (err) {
            console.log(err.json());
        });
        var utilget = this.appService.xSearchWithData('vehiculeModel/gender', buscautilitarios);
        utilget.subscribe(function (data) {
            var response = data.json();
            _this.utilitarios = _this.getCarsWithGender(response.listVehicleModel, buscautilitarios["vehicleGender"]);
        }, function (err) {
            console.log(err.json());
        });
    };
    CarselectComponent.prototype.getCarsWithGender = function (listVehicleModel, gender) {
        var listcar = new Array();
        for (var i = 0; i < listVehicleModel.length; i++) {
            var result = listVehicleModel[i];
            //TODO:FOTOS estão em mock ainda tem que ver certinho como puxar
            var car = new Car_dto_1.Car(result['id'], result['description'], "https://www.renaultretail.co.uk/assets/rr/images/vehicle/new-renault/vehicle-images/cars/renault-clio/range/09-renault-clio-glacier-white.png");
            car.gender = gender;
            if (this.simulation.car) {
                if (car.id === this.simulation.car.id && car.gender === this.simulation.car.gender) {
                    car.selected = true;
                }
            }
            listcar.push(car);
        }
        return listcar;
    };
    CarselectComponent.prototype.acessorios = function () {
        var _this = this;
        //aqui vai abrir a modal
        var dialogRef = this.dialog.open(acessoriesOptions_dialog_1.AcessoriesOptionsDialog);
        dialogRef.componentInstance.simulation = this.simulation;
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(_this.simulation);
        });
    };
    CarselectComponent.prototype.change = function (toFront) {
        console.log(this.simulation);
        console.log(this.simulation.saleType.description);
        if (this.simulation.saleType.description == "3") {
            this.simulation.vizualization = true;
        }
        this.changeStep.emit(toFront);
    };
    return CarselectComponent;
}());
__decorate([
    core_3.Input(),
    __metadata("design:type", Simulation_dto_1.Simulation)
], CarselectComponent.prototype, "simulation", void 0);
__decorate([
    core_2.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CarselectComponent.prototype, "changeStep", void 0);
CarselectComponent = __decorate([
    core_3.Component({
        selector: 'carselect',
        templateUrl: 'app/simulation/carselect/carselect.html',
        styleUrls: []
    }),
    __metadata("design:paramtypes", [app_service_1.AppService, material_1.MdDialog])
], CarselectComponent);
exports.CarselectComponent = CarselectComponent;
//# sourceMappingURL=carselect.component.js.map