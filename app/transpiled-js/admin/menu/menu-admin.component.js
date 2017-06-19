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
var translate_service_1 = require("./../../translate/translate.service");
var app_component_1 = require("./../../app.component");
var core_1 = require("@angular/core");
var MenuAdminComponent = (function () {
    function MenuAdminComponent(app, _translate) {
        this.app = app;
        this._translate = _translate;
        this.click = 0;
        this.languageBR = "assets/images/br.png";
        this.languageFR = "assets/images/fr2.png";
        this.languageEN = "assets/images/uk.png";
        this.languageES = "assets/images/spain.png";
        this.brands = ["renault", "nissan", "rci"];
    }
    MenuAdminComponent.prototype.ngOnInit = function () {
        // standing data
        this.supportedLangs = [
            { display: this.languageEN, value: 'en' },
            { display: this.languageFR, value: 'fr' },
            { display: this.languageBR, value: 'pt' },
            { display: this.languageES, value: 'es' },
        ];
        // set language
        this._translate.setDefaultLang('pt');
        this._translate.enableFallback(true);
        this.selectLang('pt');
    };
    MenuAdminComponent.prototype.isCurrentLang = function (lang) {
        return lang === this._translate.currentLang;
    };
    MenuAdminComponent.prototype.selectLang = function (lang) {
        // set default;
        this._translate.use(lang);
        // this.refreshText(); // remove
    };
    MenuAdminComponent.prototype.mudaTheme = function (event) {
        switch (this.click) {
            case 0:
                this.click = 2;
                this.app.changeTheme('renault');
                break;
            case 1:
                this.click = 0;
                this.app.changeTheme('nissan');
                break;
            case 2:
                this.click = 1;
                this.app.changeTheme('rci');
                break;
        }
    };
    return MenuAdminComponent;
}());
MenuAdminComponent = __decorate([
    core_1.Component({
        selector: 'app-menu-admin',
        templateUrl: './app/admin/menu/menu-admin.component.html'
    }),
    __metadata("design:paramtypes", [app_component_1.AppComponent, translate_service_1.TranslateService])
], MenuAdminComponent);
exports.MenuAdminComponent = MenuAdminComponent;
//# sourceMappingURL=menu-admin.component.js.map