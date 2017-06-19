import { Component, OnInit } from '@angular/core';
import { IForgotPassword } from './forgot_password.interface';
import {MdDialog, MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './app/forgot_password/forgot_password.component.html'
})

export class ForgotPasswordComponent{
    constructor(){}
}

export class ForgotPasswordComponentDialog {
  constructor(public dialogRef: MdDialogRef<ForgotPasswordComponentDialog>) {}
}