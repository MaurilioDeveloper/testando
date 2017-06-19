import { Router }               from '@angular/router';
import { Component, OnInit }    from '@angular/core';
import { TranslateService }     from './translate';
import { User }                 from './login/user.interface';
import { OverlayContainer } from '@angular/material';
import { LoaderService }        from './app.spinner';

@Component( {
    selector: 'app-root',
    templateUrl: './app/app.component.html',
})
export class AppComponent implements OnInit {

    public translatedText: string;
    public supportedLangs: any[];
    showLoader: boolean;
    public theme: string;
    private languageBR: string = "assets/images/br.png";
    private languageFR: string = "assets/images/fr2.png";
    private languageEN: string = "assets/images/uk.png";
    private languageSP: string = "assets/images/spain.png";
    public router: string;

    constructor( private _translate: TranslateService, private loaderService: LoaderService , private overlayContainer: OverlayContainer ) {
    }

    ngOnInit() {

        // standing data
        this.supportedLangs = [
            { display: this.languageEN, value: 'en' },
            { display: this.languageFR, value: 'fr' },
            { display: this.languageBR, value: 'pt' },
            { display: this.languageSP, value: 'sp' },
        ];

        this.subscribeToLangChanged();

        // set language
        this._translate.setDefaultLang( 'pt' );
        this._translate.enableFallback( true );
        this.selectLang( 'pt' );

        //set spinner loader
        this.loaderService.status.subscribe(( val: boolean ) => {
            this.showLoader = val;
        });

        this.theme = 'nissan';
         this.overlayContainer.themeClass = 'nissan';
    }


    isCurrentLang( lang: string ) {
        return lang === this._translate.currentLang;
    }

    selectLang( lang: string ) {
        // set default;
        this._translate.use( lang );
        // this.refreshText(); // remove
    }

    refreshText() {
        this.translatedText = this._translate.instant( 'hello world' );
    }

    subscribeToLangChanged() {
        return this._translate.onLangChanged.subscribe( x => this.refreshText() );
    }

    changeTheme( selectedItem: any ) {
        this.theme = selectedItem.value;
        this.overlayContainer.themeClass = selectedItem.value;
    }

    isShowHeader() {
        let currenteUser = JSON.parse(sessionStorage.getItem('currentUser'));
        //let user : User = sessionStorage.getItem('currentUser')
        let isUserLogged = false;
        if(currenteUser){
          //  console.log(currenteUser.access_token);
            isUserLogged = true;
        }else{
            isUserLogged = false;
        }
        return isUserLogged;
    }
 }