import { TranslateService } from './../../translate/translate.service';
import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-admin', 
    templateUrl: './app/admin/menu/menu-admin.component.html'
})
export class MenuAdminComponent implements OnInit {

    public brands: Array<string>;
    public click: number = 0;
    private theme: string;
    public supportedLangs: any[];
    private languageBR: string = "assets/images/br.png";
    private languageFR: string = "assets/images/fr2.png";
    private languageEN: string = "assets/images/uk.png";
    private languageES: string = "assets/images/spain.png";



    constructor(public app: AppComponent, private _translate: TranslateService) {
        this.brands = ["renault", "nissan", "rci"];

    }

    ngOnInit() {
        // standing data
        this.supportedLangs = [
            { display: this.languageEN, value: 'en' },
            { display: this.languageFR, value: 'fr' },
            { display: this.languageBR, value: 'pt' },
            { display: this.languageES, value: 'es' },
        ];

          // set language
        this._translate.setDefaultLang('pt');
        this._translate.enableFallback(true);
        this.selectLang('pt');

    }

    isCurrentLang(lang: string) {
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this._translate.use(lang);
        // this.refreshText(); // remove
    }



    mudaTheme(event) {
        switch (this.click) {
            case 0:
                this.click = 2;
                this.app.changeTheme('renault');
                break;
            case 1:
                this.click = 0;
                this.app.changeTheme('nissan');
                break;
            case 2:
                this.click = 1;
                this.app.changeTheme('rci');
                break;

        }

    }



}