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
var app_service_1 = require("./../../app.service");
var NewsAdminComponent = (function () {
    function NewsAdminComponent(appService) {
        this.appService = appService;
        /** List of financial brands **/
        this.listFinancialBrand = [];
        /** List of notices **/
        this.listNotices = [];
        /** List of ids financial brands **/
        this.listVarsFinancialBrand = [];
        /** Notice JSON **/
        this.noticeJson = {
            "user": null,
            "published": null,
            "important": null,
            "notice": null,
            "title": null,
            "listFinancialBrand": []
        };
        this.onEditorKeyup = new core_1.EventEmitter();
        this.news = [
            { title: 'Título da Notícia', createBy: 'Pastre', dateCreate: '2016-10-10 10:12:36' },
            { title: 'Título da Notícia 2', createBy: 'Gaucho', dateCreate: '2017-04-11 16:06:21' },
        ];
    }
    // @Input() new: String;
    NewsAdminComponent.prototype.ngOnInit = function () {
        this.loadFinancialBrand();
        this.loadNotices();
        this.loadUserLogged();
        this.currentDate = new Date();
        this.publish = false;
        this.title = '';
        this.notice = '';
    };
    /** Method for load user logged **/
    NewsAdminComponent.prototype.loadUserLogged = function () {
        this.user = this.appService.getSessionUser();
    };
    /** Method for consulting financial brands **/
    NewsAdminComponent.prototype.loadFinancialBrand = function () {
        var _this = this;
        var result = this.appService.xSearch('financialBrandService', 'financialBrand');
        result.subscribe(function (data) {
            var response = data.json();
            _this.listFinancialBrand = response.financialBrands;
        }, function (err) {
            console.log(err.json());
        });
    };
    NewsAdminComponent.prototype.loadNotices = function () {
        var _this = this;
        var notices = this.appService.xSearch("noticeService", "listAllNotice");
        notices.subscribe(function (data) {
            var response = data.json();
            _this.listNotices = response.listNotices;
        }, function (err) {
            console.log(err.json());
        });
    };
    /** Method for add and remove financial brands **/
    NewsAdminComponent.prototype.addFinancialBrand = function (e, idFinancialBrand) {
        if (e.checked) {
            this.listVarsFinancialBrand.push(idFinancialBrand);
        }
        else {
            var idElement = idFinancialBrand;
            var index = this.listVarsFinancialBrand.indexOf(idElement);
            this.listVarsFinancialBrand.splice(index, 1);
        }
    };
    NewsAdminComponent.prototype.createRequest = function () {
        this.noticeJson.user = this.user;
        this.noticeJson.title = this.title;
        this.noticeJson.notice = this.notice;
        this.noticeJson.published = this.publish;
        this.noticeJson.listFinancialBrand = this.listVarsFinancialBrand;
    };
    NewsAdminComponent.prototype.saveNotice = function () {
        this.createRequest();
        var observable = this.appService.xPost('noticeService/insertOrUpdateNotice', this.noticeJson);
        observable.subscribe();
    };
    return NewsAdminComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], NewsAdminComponent.prototype, "elementId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewsAdminComponent.prototype, "onEditorKeyup", void 0);
NewsAdminComponent = __decorate([
    core_1.Component({
        selector: 'app-news-admin',
        templateUrl: './app/admin/news/news_admin.component.html',
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], NewsAdminComponent);
exports.NewsAdminComponent = NewsAdminComponent;
//# sourceMappingURL=news_admin.component.js.map