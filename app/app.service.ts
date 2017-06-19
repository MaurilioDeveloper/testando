import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, RequestMethod, JsonpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationExtras } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { LoaderService } from './app.spinner';

import { AppMessage } from './app.message';

@Injectable()
export class AppService {
    public baseUrl: string = 'http://localhost:8080/omega2/api';
    public noAuth: string = 'noauth';
    public currentUrl: string;

    constructor(private http: Http, private appMessage: AppMessage, public loaderService: LoaderService, private router: Router) {
    }

    public xPost(action: string, object: any): Observable<any> {

        this.loaderService.display(true); // enable spinner    
        let body = JSON.stringify(object);
        let options = new RequestOptions({ headers: this.getHeaders() });
        let urlAction = this.baseUrl + "/" + action;
        //TODO vanderson revisar implementação com arquiteto
        urlAction += this.getUrlToken();

        console.log(urlAction);
        return this.http.post
            (urlAction, body, options)
            .map((res: any) => res)
            .do(
            (data) => {
                this.handleResponse(data);
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );
    }

    public xInsert(action: string, object: any): Observable<any> {
        this.loaderService.display(true); // enable spinner  
        let urlAction = this.baseUrl + "/" + action;

        urlAction += this.getUrlToken();

        let body = JSON.stringify(object);
        let options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.post(urlAction, body, options)
            .map((res: any) => res)
            .do(
            (data) => {
                this.handleResponse(data);
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );
    }

    public xUpdate(action: string, object: any): Observable<any> {
        this.loaderService.display(true); // enable spinner   
        let urlAction = this.baseUrl + "/" + action;

        urlAction += this.getUrlToken();

        let body = JSON.stringify(object);
        let options = new RequestOptions({ headers: this.getHeaders() });
        return this.http.put(urlAction, body, options)
            .map((res: any) => res)
            .do(
            (data) => {
                this.handleResponse(data);
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );

    }

    public xDelete(action: string, id: number): Observable<any> {
        this.loaderService.display(true); // enable spinner    
        let urlAction = this.baseUrl + "/" + action + '/' + id;

        urlAction += this.getUrlToken();

        return this.http.delete(urlAction)
            .map((res: any) => res)
            .do(
            (data) => {
                this.handleResponse(data);
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );

    }

    public xDeleteWithData(action: string, object: number): Observable<any> {
        this.loaderService.display(true); // enable spinner    
        let urlAction = this.baseUrl + "/" + action;

        urlAction += this.getUrlToken();

        let body = JSON.stringify(object);
        let options = new RequestOptions({
            body: body,
            method: RequestMethod.Delete,
            headers: this.getHeaders()
        });
        return this.http.request(urlAction, options)
            .map((res: any) => res)
            .do(
            (data) => {
                this.handleResponse(data);
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );
    }

    public xSearch(action: string, id: any): Observable<any> {
        this.loaderService.display(true); // enable spinner 
        let urlAction = this.baseUrl + "/" + action + '/' + id;

        urlAction += this.getUrlToken();
        return this.http.get(urlAction)
            .map((res: any) => res)
            .do(
            (data) => {
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );
    }

    public xSearchWithData(action: string, object: any): Observable<any> {
        this.loaderService.display(true); // enable spinner  
        let urlAction = this.baseUrl + "/" + action;

        urlAction += this.getUrlToken();
        let body = JSON.stringify(object);
        let options = new RequestOptions({
            body: body,
            method: RequestMethod.Post,
            headers: this.getHeaders()
        });
        return this.http.request(urlAction, options)
            .map((res: any) => res)
            .do(
            (data) => {
                this.loaderService.display(false); // disable spinner
            },
            err => {
                this.handleResponse(err);
                this.logError(err);
                this.loaderService.display(false); // disable spinner
            }
            );
    }

    public getSessionUser() {
        let userCurrent = JSON.parse(sessionStorage.getItem('currentUser'));
       // console.log(userCurrent);
        return userCurrent;
    }
    /**
     * TODO Vanderson - aprimorar get token - incluindo validacao de token proximo a expiração
     * fazer refresh caso esteja para expirar
     */
    public getUrlToken() {
        let token = "?access_token=" + this.getSessionUser().access_token;
        return token;
    }

    private getHeaders() {
        let headers = new Headers();
        //   headers.append('Authorization', 'Basic b21lZ2EyLXRydXN0ZWQtY2xpZW50Om9tZWdhMi10cnVzdGVkLWNsaWVudC1zZWNyZXQ=');
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

    public handleResponse(data) {
        if (data.status <= 199) {
            this.appMessage.showDefaultError();
        } else if (data.status <= 299) {
            this.appMessage.showDefaultSuccess();
        } else if (data.status == 403) {
            this.appMessage.showDefaultInfo();
        } else if (data.status == 412) {
            this.appMessage.showWarning(data.json().message);
        } else {
            this.appMessage.showDefaultError();
        }
    }

    private logError(err: any) {
        console.log(err);

    }

    public isActionPermission(action: string) {
        const user = this.getSessionUser();
        this.currentUrl = this.router.url;
        console.log("currentUrl", this.currentUrl); 
        //this.isActionPermission("DELETE");
        // let action = user.
        // let actions = str.split(",");
        let isAccess: boolean = false;
        console.log(user);
        if (user) {
            user.authorities.forEach(auth => {
                //console.log("Rota banco: ", auth.url, "Rota Fluxo: ", this.currentUrl, auth.route);
                if (auth.url === this.currentUrl && auth.route) {
                    console.log("actions", auth.actions);
                    const arrayAction = auth.actions.split(",");

                    console.log("actions", arrayAction);
                    arrayAction.forEach(actdb => {
                        if(actdb.trim() === action.trim()){
                            console.log("Retorno", actdb.trim(), action.trim());
                            isAccess = true;
                            return ;
                        }
                    });
                    return;
                }
            });
             console.log("Fim validacao ");
             return isAccess;
        }
    }

}
