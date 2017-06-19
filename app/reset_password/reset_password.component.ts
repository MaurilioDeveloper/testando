import { IResetPassword } from './reset_password.interface';
import { AppComponent } from './../app.component';
import { AppService } from './../app.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-reset-password',
    templateUrl: './app/reset_password/reset_password.component.html'
})
export class ResetPasswordComponent implements OnInit {

    passwordReset: IResetPassword;
    msg: string;

    constructor(private appService: AppService, private app: AppComponent) { }

    ngOnInit() {
        this.passwordReset = { idUser: '', idToken: '', newPassword: '', retryPassword: '' };
        this.app.router = '/login';
        console.log(this.app.router);
    }

    resetPassword(passwordReset: IResetPassword) {
        //this.slimLoader.start(); 
        let observable = this.appService.xUpdate('noauth/forgotPassword/reset/', passwordReset);

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
};