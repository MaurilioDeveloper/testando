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
var Option_dto_1 = require("./../dto/Option.dto");
var app_service_1 = require("./../../app.service");
var core_1 = require("@angular/core");
var AcessoriesOptionsDialog = (function () {
    function AcessoriesOptionsDialog(appService) {
        this.appService = appService;
        this.options = new Array();
    }
    AcessoriesOptionsDialog.prototype.ngOnInit = function () {
        var _this = this;
        var observable = this.appService.xSearch('vehicleVersionOptions', this.simulation.car.version.id);
        observable.subscribe(function (data) {
            var response = data.json();
            console.log(response);
            for (var index = 0; index < response.listOptions.length; index++) {
                var opt = response.listOptions[index];
                var option = new Option_dto_1.Option;
                option.id = opt["id"];
                option.description = opt["description"];
                option.amount = opt["amount"];
                _this.options.push(option);
            }
        }, function (err) {
            console.log(err.json());
        });
    };
    AcessoriesOptionsDialog.prototype.checked = function (model) {
        console.log(model);
        return false;
    };
    AcessoriesOptionsDialog.prototype.updateCheckedOptions = function (model, evento) {
        console.log(model);
        console.log(evento);
        this.simulation.car.version.options;
        this.simulation.car.version.price.amount += model.a;
    };
    return AcessoriesOptionsDialog;
}());
AcessoriesOptionsDialog = __decorate([
    core_1.Component({
        selector: 'acessories-options-dialog',
        templateUrl: 'app/simulation/acessoriesOptionsDialog/acessoriesOptions.dialog.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AcessoriesOptionsDialog);
exports.AcessoriesOptionsDialog = AcessoriesOptionsDialog;
//# sourceMappingURL=acessoriesOptions.dialog.js.map