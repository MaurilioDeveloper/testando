// import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { TranslateService } from './../../translate/translate.service';
import { AppComponent } from './../../app.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AppService } from './../../app.service';



@Component({
    selector: 'app-news-admin',
    templateUrl: './app/admin/news/news_admin.component.html',
    // styleUrls: ['../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class NewsAdminComponent implements OnInit {

    /** List of financial brands **/
    listFinancialBrand: Object[] = [];

    /** List of notices **/
    listNotices: Object[] = [];

    /** List of ids financial brands **/
    listVarsFinancialBrand: String[] = [];

    /** User variable **/
    user: any;

    /** Date variable **/
    currentDate: Date;

    /** Publish variable **/
    publish: boolean;

    /** News headline **/
    title: String;

    /** News subject **/
    notice: String; 

    /** Notice JSON **/
    noticeJson = {
        "user": null,
        "published": null,
        "important": null,
        "notice": null,
        "title": null,
        "listFinancialBrand": []
    }

    constructor(private appService: AppService) {

    }
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();
    // @Input() new: String;

    ngOnInit() {
        this.loadFinancialBrand();
        this.loadNotices();
        this.loadUserLogged();
        this.currentDate = new Date();
        this.publish = false;
        this.title = '';
        this.notice = '';
    }

    /** Method for load user logged **/
    loadUserLogged() {
        this.user = this.appService.getSessionUser();
    }

    /** Method for consulting financial brands **/
    loadFinancialBrand() {
        let result = this.appService.xSearch('financialBrandService', 'financialBrand')
        result.subscribe(
            (data) => {
                let response = data.json();
                this.listFinancialBrand = response.financialBrands;
            },
            err => {
                console.log(err.json());
            }
        );
    }

    loadNotices(){
        let notices = this.appService.xSearch("noticeService","listAllNotice");
        notices.subscribe(
            (data) =>{
                let response = data.json();
                this.listNotices = response.listNotices;
            },
            err => {
				console.log(err.json());
			}
        );
    }

    /** Method for add and remove financial brands **/
    addFinancialBrand(e, idFinancialBrand: String) {
        if (e.checked) {
            this.listVarsFinancialBrand.push(idFinancialBrand);
        } else {
            let idElement: String = idFinancialBrand;
            var index = this.listVarsFinancialBrand.indexOf(idElement);
            this.listVarsFinancialBrand.splice(index, 1);
        }
    }

    createRequest() {
        this.noticeJson.user = this.user;
        this.noticeJson.title = this.title;
        this.noticeJson.notice = this.notice;
        this.noticeJson.published = this.publish;
        this.noticeJson.listFinancialBrand = this.listVarsFinancialBrand;
    }

    news: any[] = [
        { title: 'Título da Notícia', createBy: 'Pastre', dateCreate: '2016-10-10 10:12:36' },
        { title: 'Título da Notícia 2', createBy: 'Gaucho', dateCreate: '2017-04-11 16:06:21' },
    ];


    saveNotice() {
        this.createRequest();
        let observable = this.appService.xPost('noticeService/insertOrUpdateNotice', this.noticeJson); 
        observable.subscribe();
    }


}