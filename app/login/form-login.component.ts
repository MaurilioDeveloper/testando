import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Login } from './login.interface';
import { AuthService } from './auth.service';
import {
    Router,
    NavigationExtras
} from '@angular/router';

import { AppMessage } from './../app.message';

@Component( {
    //moduleId: module.id,
    selector: 'form-login',
    templateUrl: './app/login/form-login.html'
})
export class FormLoginComponent implements OnInit {
    login: Login;
    msg: string;

    ngOnInit() {
        this.login = { user: '', password: '' };
    };

    constructor( private authService: AuthService,
        private app: AppComponent,
        public router: Router, private appMessage: AppMessage ) {
    };

    public doLogin( login: Login ) {
        // let observable = this.appService.xPost('authentication/login',login);

        this.authService.doLogin( login ).subscribe(( data ) => {
            //if ( this.authService.isLoggedIn() ) {
                this.appMessage.showSuccess( "Usuário logado com sucesso" );

                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                let payload = data.json();
                //JSON.stringify()
                sessionStorage.setItem( 'currentUser', JSON.stringify(payload) );
                //this.msg = data.json().access_token;
               // console.log( this.msg );
                //JSON.parse(sessionStorage.getItem('currentUser'));
                //console.log(  sessionStorage.getItem( 'currentUser' ) );

                // Redirect the user
                this.router.navigate( [redirect], navigationExtras );
            
        });
    }

}