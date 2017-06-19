import {Component} from '@angular/core';

@Component({
    selector: 'promo-images',
    templateUrl: './app/promotional_images/promotional_images.component.html'
})
export class PromotionalImagesComponent {

    private showCard: boolean = false;

    marcas = [
        {value: 'nissan-0', viewValue: 'Nissan'},
        {value: 'renault-1', viewValue: 'Renault'},
        {value: 'rci-2', viewValue: 'Banco RCI'}
    ];

    searchImage(){
        console.log(this.showCard);
        this.showCard = true;
        console.log(this.showCard);
    }


    constructor(){
    };
};