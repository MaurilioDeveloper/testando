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
var brlpipe_1 = require("./commons/value/brlpipe");
var cnpj_pipe_1 = require("./my_agreement/cnpj.pipe");
var cpf_pipe_1 = require("./my_agreement/cpf.pipe");
var simulation_module_1 = require("./simulation/simulation.module");
var menu_module_1 = require("./menu/menu.module");
var router_1 = require("@angular/router");
var auth_guard_service_1 = require("./login/auth-guard.service");
var form_login_component_1 = require("./login/form-login.component");
var core_1 = require("@angular/core");
var stepper_component_1 = require("./stepper/stepper.component");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var app_service_1 = require("./app.service");
var ngx_toastr_1 = require("ngx-toastr");
var app_spinner_1 = require("./app.spinner");
var app_message_1 = require("./app.message");
var login_routing_module_1 = require("./login/login-routing.module");
var mask_diretive_1 = require("./diretive/mask.diretive");
var ng_lightning_1 = require("ng-lightning/ng-lightning");
var translate_1 = require("./translate");
var menu_admin_component_1 = require("./admin/menu/menu-admin.component");
var ngx_quill_1 = require("ngx-quill");
var AppModule = (function () {
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            login_routing_module_1.LoginRoutingModule,
            menu_module_1.MenuModule,
            simulation_module_1.SimulationModule,
            app_routing_1.AppRoutingModule,
            material_1.MaterialModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            material_1.MdCardModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdDatepickerModule,
            material_1.MdNativeDateModule,
            ngx_quill_1.QuillModule,
            flex_layout_1.FlexLayoutModule,
            ngx_toastr_1.ToastrModule.forRoot({ timeOut: 0 }),
            animations_1.BrowserAnimationsModule, ng_lightning_1.NglModule],
        declarations: [app_component_1.AppComponent,
            translate_1.TranslatePipe,
            app_routing_1.AppRoutes.components,
            login_routing_module_1.LoginRoutes.components,
            form_login_component_1.FormLoginComponent,
            stepper_component_1.StepperComponent,
            menu_admin_component_1.MenuAdminComponent,
            mask_diretive_1.OmegaMaskDirective,
            cpf_pipe_1.CpfPipe,
            cnpj_pipe_1.CnpjPipe,
            menu_module_1.MenuComponents.components,
            simulation_module_1.SimulationComponents.components
        ],
        providers: [app_service_1.AppService,
            auth_guard_service_1.AuthGuard,
            material_1.MdIconRegistry,
            translate_1.TRANSLATION_PROVIDERS,
            translate_1.TranslateService,
            app_message_1.AppMessage,
            ngx_toastr_1.ToastrService,
            app_spinner_1.LoaderService, brlpipe_1.BrlPipe],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
        bootstrap: [app_component_1.AppComponent],
        exports: [
            mask_diretive_1.OmegaMaskDirective
        ]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map