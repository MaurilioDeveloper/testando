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
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        var isCheck = false;
        if (this.checkLogin(url)) {
            isCheck = this.isPermission(url);
        }
        return isCheck;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        // console.log("checkLogin Start", url, this.authService.isLoggedIn);
        if (this.authService.isLoggedIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;
        /*  // Create a dummy session id
          let sessionId = 123456789;
      
          // Set our navigation extras object
          // that contains our global query params and fragment
          let navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': sessionId },
            fragment: 'anchor'
          };*/
        // Navigate to the login page with extras
        // this.router.navigate(['/login'], navigationExtras);
        this.router.navigate(['/login']);
        //  console.log("checkLogin end", url);
        return false;
    };
    AuthGuard.prototype.isPermission = function (url) {
        var user = this.authService.appService.getSessionUser();
        var isCkeck = false;
        if (user) {
            user.authorities.forEach(function (auth) {
                // console.log("Rota banco: ",auth.url, "Rota Fluxo: ",url,auth.route );
                if (auth.url === url && auth.route) {
                    console.log("auth ok");
                    isCkeck = true;
                    return;
                }
            });
            if (!isCkeck) {
                // console.log("auth nook");
                this.router.navigate(['/denied']);
                isCkeck = false;
            }
        }
        return isCkeck;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], AuthGuard);
exports.AuthGuard = AuthGuard;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=auth-guard.service.js.map