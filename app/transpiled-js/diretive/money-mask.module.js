"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var money_input_service_1 = require("./money-input.service");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var money_mask_directive_1 = require("./money-mask.directive");
var MoneyMaskModule = (function () {
    function MoneyMaskModule() {
    }
    return MoneyMaskModule;
}());
MoneyMaskModule = __decorate([
    core_1.NgModule({
        declarations: [
            money_mask_directive_1.MoneyMaskDirective
        ],
        exports: [
            money_mask_directive_1.MoneyMaskDirective
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule
        ],
        providers: [money_input_service_1.MoneyInputService]
    })
], MoneyMaskModule);
exports.MoneyMaskModule = MoneyMaskModule;
//# sourceMappingURL=money-mask.module.js.map