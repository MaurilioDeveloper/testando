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
var app_message_1 = require("./../app.message");
var core_1 = require("@angular/core");
var SalesmanCommunicationComponent = (function () {
    function SalesmanCommunicationComponent(appMessage) {
        this.appMessage = appMessage;
    }
    SalesmanCommunicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = new WebSocket("ws://10.27.104.1:8080/omega2-async-communication/salesman_communication");
        this.socket.onopen = function (event) {
        };
        this.socket.onclose = function (event) {
        };
        this.socket.onmessage = function (event) {
            _this.appMessage.showInfo(event.data);
        };
    };
    return SalesmanCommunicationComponent;
}());
SalesmanCommunicationComponent = __decorate([
    core_1.Component({
        selector: 'salesman_communication',
        templateUrl: './app/salesman_communication/salesman_communication.component.html'
    }),
    __metadata("design:paramtypes", [app_message_1.AppMessage])
], SalesmanCommunicationComponent);
exports.SalesmanCommunicationComponent = SalesmanCommunicationComponent;
//# sourceMappingURL=salesman_communication.component.js.map