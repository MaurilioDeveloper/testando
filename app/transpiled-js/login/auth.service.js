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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
//import { LoaderService } from './../app.spinner';
var http_1 = require("@angular/http");
require("rxjs/add/observable/of");
require("rxjs/add/operator/do");
require("rxjs/add/operator/delay");
var app_service_1 = require("./../app.service");
var AuthService = (function () {
    function AuthService(http, appService, router) {
        this.http = http;
        this.appService = appService;
        this.router = router;
        this.action = '';
    }
    AuthService.prototype.ngOnInit = function () {
        this.currentUrl = this.router.url;
    };
    AuthService.prototype.isLoggedIn = function () {
        var user = this.appService.getSessionUser();
        if (user) {
            return true;
        }
        return false;
    };
    AuthService.prototype.doLogin = function (login) {
        var _this = this;
        this.action = 'request_token?grant_type=password&username=' + login.user + '&password=' + login.password;
        this.appService.loaderService.display(true); // enable spinner    
        // let body = JSON.stringify( object );
        var options = new http_1.RequestOptions({ headers: this.getHeaders() });
        var urlAction = this.appService.baseUrl + "/" + this.action;
        console.log(urlAction);
        var obervable = this.http.post(urlAction, null, options)
            .map(function (res) { return res; })
            .do(function (data) {
            //this.appService.handleResponse(data);
            console.log("usuario logado");
            _this.appService.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.appService.handleResponse(err);
            //this.logError( err );
            _this.appService.loaderService.display(false); // disable spinner
        });
        return obervable;
    };
    AuthService.prototype.doLogout = function () {
        var _this = this;
        this.appService.loaderService.display(true);
        var currenteUser = sessionStorage.getItem('currentUser');
        this.action = 'securityService/logout' + this.appService.getUrlToken();
        this.appService.loaderService.display(true); // enable spinner    
        // let body = JSON.stringify( object );
        var options = new http_1.RequestOptions({ headers: this.getHeaders() });
        var urlAction = this.appService.baseUrl + "/" + this.action;
        var navigationExtras = {
            preserveQueryParams: false,
            preserveFragment: false
        };
        console.log(urlAction);
        var obervable = this.http.post(urlAction, null, options)
            .map(function (res) { return res; })
            .do(function (data) {
            sessionStorage.setItem('currentUser', null);
            _this.router.navigate(['/login'], navigationExtras);
            _this.appService.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.appService.handleResponse(err);
            //this.logError( err );
            _this.appService.loaderService.display(false); // disable spinner
        });
        return obervable;
    };
    AuthService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic b21lZ2EyLXRydXN0ZWQtY2xpZW50Om9tZWdhMi10cnVzdGVkLWNsaWVudC1zZWNyZXQ=');
        headers.append('Content-Type', 'application/json');
        //  text/html
        /*   headers.append('Access-Control-Allow-Origin', 'http://localhost');
           headers.append('Access-Control-Allow-Origin', '*');
           headers.append('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
           headers.append('Access-Control-Allow-Headers', 'authorization, x-requested-with, Content-Type, origin, accept, client-security-token');
          */
        console.log(headers);
        return headers;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_service_1.AppService, router_1.Router])
], AuthService);
exports.AuthService = AuthService;
/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=auth.service.js.map