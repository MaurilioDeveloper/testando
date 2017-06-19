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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var app_spinner_1 = require("./app.spinner");
var app_message_1 = require("./app.message");
var AppService = (function () {
    function AppService(http, appMessage, loaderService, router) {
        this.http = http;
        this.appMessage = appMessage;
        this.loaderService = loaderService;
        this.router = router;
        this.baseUrl = 'http://localhost:8080/omega2/api';
        this.noAuth = 'noauth';
    }
    AppService.prototype.xPost = function (action, object) {
        var _this = this;
        this.loaderService.display(true); // enable spinner    
        var body = JSON.stringify(object);
        var options = new http_1.RequestOptions({ headers: this.getHeaders() });
        var urlAction = this.baseUrl + "/" + action;
        //TODO vanderson revisar implementação com arquiteto
        urlAction += this.getUrlToken();
        console.log(urlAction);
        return this.http.post(urlAction, body, options)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.handleResponse(data);
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.xInsert = function (action, object) {
        var _this = this;
        this.loaderService.display(true); // enable spinner  
        var urlAction = this.baseUrl + "/" + action;
        urlAction += this.getUrlToken();
        var body = JSON.stringify(object);
        var options = new http_1.RequestOptions({ headers: this.getHeaders() });
        return this.http.post(urlAction, body, options)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.handleResponse(data);
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.xUpdate = function (action, object) {
        var _this = this;
        this.loaderService.display(true); // enable spinner   
        var urlAction = this.baseUrl + "/" + action;
        urlAction += this.getUrlToken();
        var body = JSON.stringify(object);
        var options = new http_1.RequestOptions({ headers: this.getHeaders() });
        return this.http.put(urlAction, body, options)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.handleResponse(data);
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.xDelete = function (action, id) {
        var _this = this;
        this.loaderService.display(true); // enable spinner    
        var urlAction = this.baseUrl + "/" + action + '/' + id;
        urlAction += this.getUrlToken();
        return this.http.delete(urlAction)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.handleResponse(data);
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.xDeleteWithData = function (action, object) {
        var _this = this;
        this.loaderService.display(true); // enable spinner    
        var urlAction = this.baseUrl + "/" + action;
        urlAction += this.getUrlToken();
        var body = JSON.stringify(object);
        var options = new http_1.RequestOptions({
            body: body,
            method: http_1.RequestMethod.Delete,
            headers: this.getHeaders()
        });
        return this.http.request(urlAction, options)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.handleResponse(data);
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.xSearch = function (action, id) {
        var _this = this;
        this.loaderService.display(true); // enable spinner 
        var urlAction = this.baseUrl + "/" + action + '/' + id;
        urlAction += this.getUrlToken();
        return this.http.get(urlAction)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.xSearchWithData = function (action, object) {
        var _this = this;
        this.loaderService.display(true); // enable spinner  
        var urlAction = this.baseUrl + "/" + action;
        urlAction += this.getUrlToken();
        var body = JSON.stringify(object);
        var options = new http_1.RequestOptions({
            body: body,
            method: http_1.RequestMethod.Post,
            headers: this.getHeaders()
        });
        return this.http.request(urlAction, options)
            .map(function (res) { return res; })
            .do(function (data) {
            _this.loaderService.display(false); // disable spinner
        }, function (err) {
            _this.handleResponse(err);
            _this.logError(err);
            _this.loaderService.display(false); // disable spinner
        });
    };
    AppService.prototype.getSessionUser = function () {
        var userCurrent = JSON.parse(sessionStorage.getItem('currentUser'));
        // console.log(userCurrent);
        return userCurrent;
    };
    /**
     * TODO Vanderson - aprimorar get token - incluindo validacao de token proximo a expiração
     * fazer refresh caso esteja para expirar
     */
    AppService.prototype.getUrlToken = function () {
        var token = "?access_token=" + this.getSessionUser().access_token;
        return token;
    };
    AppService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        //   headers.append('Authorization', 'Basic b21lZ2EyLXRydXN0ZWQtY2xpZW50Om9tZWdhMi10cnVzdGVkLWNsaWVudC1zZWNyZXQ=');
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
    AppService.prototype.handleResponse = function (data) {
        if (data.status <= 199) {
            this.appMessage.showDefaultError();
        }
        else if (data.status <= 299) {
            this.appMessage.showDefaultSuccess();
        }
        else if (data.status == 403) {
            this.appMessage.showDefaultInfo();
        }
        else if (data.status == 412) {
            this.appMessage.showWarning(data.json().message);
        }
        else {
            this.appMessage.showDefaultError();
        }
    };
    AppService.prototype.logError = function (err) {
        console.log(err);
    };
    AppService.prototype.isActionPermission = function (action) {
        var _this = this;
        var user = this.getSessionUser();
        this.currentUrl = this.router.url;
        console.log("currentUrl", this.currentUrl);
        //this.isActionPermission("DELETE");
        // let action = user.
        // let actions = str.split(",");
        var isAccess = false;
        console.log(user);
        if (user) {
            user.authorities.forEach(function (auth) {
                //console.log("Rota banco: ", auth.url, "Rota Fluxo: ", this.currentUrl, auth.route);
                if (auth.url === _this.currentUrl && auth.route) {
                    console.log("actions", auth.actions);
                    var arrayAction = auth.actions.split(",");
                    console.log("actions", arrayAction);
                    arrayAction.forEach(function (actdb) {
                        if (actdb.trim() === action.trim()) {
                            console.log("Retorno", actdb.trim(), action.trim());
                            isAccess = true;
                            return;
                        }
                    });
                    return;
                }
            });
            console.log("Fim validacao ");
            return isAccess;
        }
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, app_message_1.AppMessage, app_spinner_1.LoaderService, router_1.Router])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map