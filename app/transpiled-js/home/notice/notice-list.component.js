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
var notice_list_dto_1 = require("./dto/notice-list.dto");
var app_service_1 = require("./../../app.service");
var core_1 = require("@angular/core");
var NoticeListComponent = (function () {
    function NoticeListComponent(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    ;
    NoticeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var notices = this.appService.xSearch("noticeService", "noticelist");
        notices.subscribe(function (data) {
            var response = data.json();
            _this.notices = _this.getCarsWithGender(response.listNotices);
        }, function (err) {
            console.log(err.json());
        });
    };
    NoticeListComponent.prototype.getCarsWithGender = function (listNotices) {
        var listnotice = new Array();
        for (var i = 0; i < listNotices.length; i++) {
            var result = listNotices[i];
            var notice = new notice_list_dto_1.NoticeList(result['id'], result['title']);
            listnotice.push(notice);
        }
        return listnotice;
    };
    NoticeListComponent.prototype.onSelect = function (id) {
        this.router.navigate(['/notice', id]);
    };
    return NoticeListComponent;
}());
NoticeListComponent = __decorate([
    core_1.Component({
        selector: 'app-notice-list',
        template: "\n        <ul *ngFor=\"let nots of notices\">\n           <a href=\"/notice\"><li class=\"news\">{{nots.title}}</li></a>        \n        </ul>\n    "
    }),
    __metadata("design:paramtypes", [app_service_1.AppService,
        router_1.Router])
], NoticeListComponent);
exports.NoticeListComponent = NoticeListComponent;
;
//# sourceMappingURL=notice-list.component.js.map