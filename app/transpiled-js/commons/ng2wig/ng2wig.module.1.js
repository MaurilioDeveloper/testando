"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2wig_component_1 = require("./ng2wig.component");
var ng2wig_toolbar_service_1 = require("./ng2wig-toolbar.service");
var Ng2WigModule = (function () {
    function Ng2WigModule() {
    }
    return Ng2WigModule;
}());
Ng2WigModule = __decorate([
    core_1.NgModule({
        declarations: [
            ng2wig_component_1.Ng2WigComponent
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        providers: [ng2wig_toolbar_service_1.Ng2WigToolbarService],
        bootstrap: [ng2wig_component_1.Ng2WigComponent],
        exports: [ng2wig_component_1.Ng2WigComponent]
    })
], Ng2WigModule);
exports.Ng2WigModule = Ng2WigModule;
//# sourceMappingURL=ng2wig.module.1.js.map