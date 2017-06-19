import { AppService } from './../../app.service';
import { Notice } from './dto/notice.dto';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice',
    templateUrl: './app/home/notice/notice.component.html'
})

export class NoticeComponent {
    notice: Notice;
    id: string;
    constructor(id: string, private appService: AppService) {
        this.id = id;
    }

    ngOnInit() {
        this.getNotice(this.id);
    }

    getNotice(id:string) {
        let notices = this.appService.xSearchWithData("noticeService/notice", id);
        notices.subscribe(
            (data) => {
                let response = data.json();
                this.notice = response.notice.notice;
            },
            err => {
                console.log(err.json());
            }
        );
    }
};