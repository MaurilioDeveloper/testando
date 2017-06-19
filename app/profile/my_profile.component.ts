import { AppComponent } from './../app.component';
import { AppService } from './../app.service';
import { IUser } from './my_profile.interface';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-profile',
    templateUrl: './app/profile/my_profile.component.html'
})
export class MyProfileComponent implements OnInit {

    user: IUser;
    edittedUser: IUser;
    msg: string;

    constructor(private appService: AppService, private app: AppComponent) { }

    ngOnInit() {
        this.user = { idUser: '', idToken: '', newPassword: '', retryPassword: '' };
        this.app.router = '/admin';
        console.log(this.app.router);
    }

    resetPassword(user: IUser) {
        //this.slimLoader.start(); 
        let observable = this.appService.xUpdate('/noauth/forgotPassword/reset/', user);

        observable.subscribe(
            (data) => {

                let payload = data.json();
                console.log(data.json());
                this.msg = payload.msg;

            },
            err => {
                console.log(err.json());
            }
        );
    }

    isShowReset(){
        return this.appService.isActionPermission('UPDATE');  
    }
};