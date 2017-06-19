import {Component} from '@angular/core';


@Component({
    selector: 'model',
    templateUrl: './app/model/model.component.html'

})
export class ModelComponent {

    private btnHideMarca: boolean = false;
    private btnHideModelo: boolean = false;
    private btnHideVersao: boolean = false;
    private varBtnMarca: string = 'keyboard_arrow_down';
    private varBtnModelo: string = 'keyboard_arrow_down';
    private varBtnVersao: string = 'keyboard_arrow_down';

    marcas = [
        {value: 'nissan-0', viewValue: 'Nissan'},
        {value: 'renault-1', viewValue: 'Renault'}
    ];

    modelos = [
        {value: 'teste-0', viewValue: 'Teste'},
        {value: 'teste-1', viewValue: 'Teste2'}
    ];
    versoes = [
        {value: 'teste-0', viewValue: 'Teste'},
        {value: 'teste-1', viewValue: 'Teste2'}
    ];



    constructor(){
    };
    clicked(event){
       switch (event) {
           case '1':
                if(this.btnHideMarca == true){
                    this.btnHideMarca = false;
                    this.varBtnMarca = 'keyboard_arrow_down';
                }else{
                    this.btnHideMarca = true;
                    this.varBtnMarca = 'keyboard_arrow_up';
                    this.varBtnModelo = 'keyboard_arrow_down';
                    this.varBtnVersao = 'keyboard_arrow_down';
                }
                this.btnHideModelo = false;
                this.btnHideVersao = false; 
            break;
            case '2':
                if(this.btnHideModelo == true){
                    this.btnHideModelo = false;
                    this.varBtnModelo = 'keyboard_arrow_down';
                }else{
                    this.btnHideModelo = true;
                    this.varBtnModelo = 'keyboard_arrow_up';
                    this.varBtnMarca = 'keyboard_arrow_down';
                    this.varBtnVersao = 'keyboard_arrow_down';
                }
                this.btnHideMarca = false;
                this.btnHideVersao = false; 
            break;
            case '3':
                if(this.btnHideVersao == true){
                    this.btnHideVersao = false;
                    this.varBtnVersao = 'keyboard_arrow_down';
                }else{
                    this.btnHideVersao = true;
                    this.varBtnVersao = 'keyboard_arrow_up';
                    this.varBtnMarca = 'keyboard_arrow_down';
                    this.varBtnModelo = 'keyboard_arrow_down';
                }
                this.btnHideMarca = false;
                this.btnHideModelo = false;
            break;
       
           default:
               break;
       }
    }
};