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
var app_service_1 = require("./../app.service");
var SaleType_dto_1 = require("./dto/SaleType.dto");
var Client_dto_1 = require("./dto/Client.dto");
var Simulation_dto_1 = require("./dto/Simulation.dto");
var core_1 = require("@angular/core");
var SimulationComponent = (function () {
    function SimulationComponent(appService) {
        this.appService = appService;
        this.steep = 0;
        this.typesGrace = [
            { value: 'teste', viewValue: 'Teste' },
            { value: 'teste2', viewValue: 'Teste 2' },
        ];
    }
    ;
    SimulationComponent.prototype.ngOnInit = function () {
        if (this.proposalid) {
            //this.simulation =  consulta da simulacao
            this.simulation.vizualization = true;
        }
        else {
            this.simulation = new Simulation_dto_1.Simulation;
            this.simulation.client = new Client_dto_1.Client;
            this.simulation.saleType = new SaleType_dto_1.SaleType;
            this.simulation.vizualization = false;
        }
    };
    SimulationComponent.prototype.changeStep = function (toFront) {
        if (toFront) {
            if (this.steep == 4) {
                return;
            }
            this.steep++;
        }
        else {
            if (this.steep == 0) {
                return;
            }
            this.steep--;
        }
    };
    SimulationComponent.prototype.sendByEmail = function (idProposal) {
        //this.appService.xSearchWithData("proposalService/sendEmail",idProposal);
        //teste
        var email = this.appService.xSearch("proposalService", "sendEmail/m2W1ZHVkLQKKCJYHaDOUzA");
        email.subscribe(function (err) {
            console.log(err.json());
        });
    };
    SimulationComponent.prototype.print = function (idProposal) {
        //this.appService.xSearchWithData("proposalService/sendEmail",idProposal);
        //teste
        var email = this.appService.xSearch("proposalService", "print/m2W1ZHVkLQKKCJYHaDOUzA");
        email.subscribe(function (data) {
            var response = data.json();
        }, function (err) {
            console.log(err.json());
        });
    };
    return SimulationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Simulation_dto_1.Simulation)
], SimulationComponent.prototype, "proposalid", void 0);
SimulationComponent = __decorate([
    core_1.Component({
        selector: 'simulation',
        templateUrl: './app/simulation/simulation.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], SimulationComponent);
exports.SimulationComponent = SimulationComponent;
//# sourceMappingURL=simulation.component.js.map