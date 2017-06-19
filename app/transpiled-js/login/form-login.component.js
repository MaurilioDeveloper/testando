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
var app_component_1 = require("./../app.component");
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var router_1 = require("@angular/router");
var app_message_1 = require("./../app.message");
var FormLoginComponent = (function () {
    function FormLoginComponent(authService, app, router, appMessage) {
        this.authService = authService;
        this.app = app;
        this.router = router;
        this.appMessage = appMessage;
    }
    FormLoginComponent.prototype.ngOnInit = function () {
        this.login = { user: '', password: '' };
    };
    ;
    ;
    FormLoginComponent.prototype.doLogin = function (login) {
        // let observable = this.appService.xPost('authentication/login',login);
        var _this = this;
        this.authService.doLogin(login).subscribe(function (data) {
            //if ( this.authService.isLoggedIn() ) {
            _this.appMessage.showSuccess("Usuário logado com sucesso");
            // Get the redirect URL from our auth service
            // If no redirect has been set, use the default
            var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : '/home';
            // Set our navigation extras object
            // that passes on our global query params and fragment
            var navigationExtras = {
                preserveQueryParams: true,
                preserveFragment: true
            };
            var payload = data.json();
            //JSON.stringify()
            sessionStorage.setItem('currentUser', JSON.stringify(payload));
            //this.msg = data.json().access_token;
            // console.log( this.msg );
            //JSON.parse(sessionStorage.getItem('currentUser'));
            //console.log(  sessionStorage.getItem( 'currentUser' ) );
            // Redirect the user
            _this.router.navigate([redirect], navigationExtras);
        });
    };
    return FormLoginComponent;
}());
FormLoginComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'form-login',
        templateUrl: './app/login/form-login.html'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        app_component_1.AppComponent,
        router_1.Router, app_message_1.AppMessage])
], FormLoginComponent);
exports.FormLoginComponent = FormLoginComponent;
//# sourceMappingURL=form-login.component.js.map