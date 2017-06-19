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
var app_service_1 = require("./../app.service");
var MyAgreementComponent = (function () {
    function MyAgreementComponent(appService) {
        this.appService = appService;
        this.showConsult = false;
        this.listPersonType = [];
        this.listDossierStatus = [{ dossierStatusId: null, description: 'Selecionar um status...' }];
        this.listStructure = [{ structureId: null, description: 'Selecionar uma concessionária...' }];
        this.listSalesman = [{ dossierStatusId: null, name: 'Selecionar um vendedor...' }];
        this.listSaleType = [{ saleTypeId: null, description: 'Selecionar um tipo de venda...' }];
        this.listDossiers = [];
    }
    MyAgreementComponent.prototype.ngOnInit = function () {
        var userSession = this.appService.getSessionUser();
        this.user = { userId: userSession.userId, regionalView: userSession.isRegionalView };
        this.loadSelect(this.user);
        this.loadForm();
    };
    ;
    MyAgreementComponent.prototype.loadForm = function () {
        this.filter = { idDossier: null,
            adp: null,
            typePerson: null,
            cpfCnpj: null,
            nameClient: null,
            proposedStatus: null,
            dateCreationInit: null,
            dateCreationEnd: null,
            dateExpirationInit: null,
            dateExpirationEnd: null,
            salesman: null,
            dealership: null,
            userId: this.user.userId,
            regionalView: this.user.regionalView,
            saleTypeId: null,
            taxTc: false };
    };
    MyAgreementComponent.prototype.loadSelect = function (user) {
        var _this = this;
        var observable = this.appService.xSearchWithData('myAgreementService/myAgreementSelect', user);
        observable.subscribe(function (data) {
            var response = data.json();
            (_a = _this.listDossierStatus).push.apply(_a, response.listDossierStatus);
            (_b = _this.listStructure).push.apply(_b, response.listStructure);
            (_c = _this.listSaleType).push.apply(_c, response.listSaleType);
            _this.listPersonType = (response.listPersonType);
            var _a, _b, _c;
        }, function (err) {
            console.log(err.json());
        });
    };
    MyAgreementComponent.prototype.loadSalesman = function (structureSelected) {
        var _this = this;
        this.structure = { structureId: structureSelected };
        var observable = this.appService.xSearchWithData('personService/questSalesmanDealership', this.structure);
        observable.subscribe(function (data) {
            var response = data.json();
            (_a = _this.listSalesman).push.apply(_a, response.listPerson);
            var _a;
        }, function (err) {
            console.log(err.json());
        });
    };
    MyAgreementComponent.prototype.clearMyAgreement = function () {
        this.loadForm();
    };
    MyAgreementComponent.prototype.consult = function (filter) {
        var _this = this;
        filter;
        var observable = this.appService.xSearchWithData('dossierService/myDossier', filter);
        observable.subscribe(function (data) {
            var response = data.json();
            if (response.listDossiers != undefined) {
                _this.listDossiers = response.listDossiers;
                _this.showConsult = true;
            }
            else {
                _this.showConsult = false;
            }
        }, function (err) {
            console.log(err.json());
        });
    };
    return MyAgreementComponent;
}());
MyAgreementComponent = __decorate([
    core_1.Component({
        selector: 'my-agreement',
        templateUrl: './app/my_agreement/my_agreement.component.html'
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], MyAgreementComponent);
exports.MyAgreementComponent = MyAgreementComponent;
//# sourceMappingURL=my_agreement.component.js.map