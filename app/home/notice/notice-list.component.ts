import { Router } from '@angular/router';
import { NoticeList } from './dto/notice-list.dto';
import { AppService } from './../../app.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-notice-list',
    template: `
        <ul *ngFor="let nots of notices">
           <a href="/notice"><li class="news">{{nots.title}}</li></a>        
        </ul>
    `
})
export class NoticeListComponent {
    notices: Array<NoticeList>
    constructor(
        private appService: AppService,
        private router: Router
    ) {};

    ngOnInit() {

        let notices = this.appService.xSearch("noticeService", "noticelist");
        notices.subscribe(
            (data) => {
                let response = data.json();
                this.notices = this.getCarsWithGender(response.listNotices);
            },
            err => {
                console.log(err.json());
            }
        );
    }

    getCarsWithGender(listNotices: Array<object>) {
        let listnotice: Array<NoticeList> = new Array();
        for (var i = 0; i < listNotices.length; i++) {
            let result = listNotices[i];
            let notice = new NoticeList(result['id'], result['title']);
            listnotice.push(notice);
        }
        return listnotice;
    }

    onSelect(id:string) {
        this.router.navigate(['/notice', id]);
    }

};