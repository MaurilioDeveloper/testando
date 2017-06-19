import { Router, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
//import { LoaderService } from './../app.spinner';

import { Http, Response, RequestOptions, Headers, RequestMethod, JsonpModule } from '@angular/http';
import { AppMessage } from './../app.message';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { AppService } from './../app.service';
import { Login } from './login.interface';


@Injectable()
export class AuthService {
    action: string = '';
    msg: string;

    // store the URL so we can redirect after logging in
    redirectUrl: string;
    currentUrl: string;

    constructor(private http: Http, public appService: AppService, private router: Router) {
    }

    ngOnInit() {
        this.currentUrl = this.router.url; 
    }

    isLoggedIn() {
        const user = this.appService.getSessionUser();
        if (user) {
            return true;
        }
        return false;
    }

    doLogin(login: Login): Observable<any> {
        this.action = 'request_token?grant_type=password&username=' + login.user + '&password=' + login.password;

        this.appService.loaderService.display(true); // enable spinner    
        // let body = JSON.stringify( object );
        let options = new RequestOptions({ headers: this.getHeaders() });
        let urlAction = this.appService.baseUrl + "/" + this.action;

        console.log(urlAction);
        let obervable = this.http.post
            (urlAction, null, options)
            .map((res: any) => res)
            .do(
            (data) => {
                //this.appService.handleResponse(data);
                console.log("usuario logado");
                this.appService.loaderService.display(false); // disable spinner
            },
            err => {
                this.appService.handleResponse(err);
                //this.logError( err );
                this.appService.loaderService.display(false); // disable spinner
            }
            );

        return obervable;
    }


    doLogout(): Observable<any> {
        this.appService.loaderService.display(true);
        let currenteUser = sessionStorage.getItem('currentUser');

        this.action = 'securityService/logout' + this.appService.getUrlToken();

        this.appService.loaderService.display(true); // enable spinner    
        // let body = JSON.stringify( object );
        let options = new RequestOptions({ headers: this.getHeaders() });
        let urlAction = this.appService.baseUrl + "/" + this.action;

        let navigationExtras: NavigationExtras = {
            preserveQueryParams: false,
            preserveFragment: false
        };

        console.log(urlAction);
        let obervable = this.http.post
            (urlAction, null, options)
            .map((res: any) => res)
            .do(
            (data) => {
                sessionStorage.setItem('currentUser', null);
                this.router.navigate(['/login'], navigationExtras);
                this.appService.loaderService.display(false); // disable spinner
            },
            err => {
                this.appService.handleResponse(err);
                //this.logError( err );
                this.appService.loaderService.display(false); // disable spinner
            }
            );

        return obervable;
    }

    private getHeaders() {
        let headers = new Headers();
        headers.append('Authorization', 'Basic b21lZ2EyLXRydXN0ZWQtY2xpZW50Om9tZWdhMi10cnVzdGVkLWNsaWVudC1zZWNyZXQ=');
        headers.append('Content-Type', 'application/json');
        //  text/html


        /*   headers.append('Access-Control-Allow-Origin', 'http://localhost');
           headers.append('Access-Control-Allow-Origin', '*');
           headers.append('Access-Control-Allow-Methods', 'POST, GET, PATCH, PUT, DELETE, OPTIONS');
           headers.append('Access-Control-Allow-Headers', 'authorization, x-requested-with, Content-Type, origin, accept, client-security-token');
          */

        console.log(headers);
        return headers;
    }

    

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/