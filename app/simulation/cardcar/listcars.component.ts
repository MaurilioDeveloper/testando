import { Car } from './../dto/Car.dto';
import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'listcars',
    template: `
    <md-tab-group class="tabcenter">
        <md-tab label="CARROS" position="0">
            <div class="container"  layout="row" flex>
                <div (click)="select($event, car)" class="borderCar" *ngFor="let car of cars" 
                    [style.xs]="{'max-width': '100%','max-height':'80%'}"
                    [style.sm]="{'max-width': '45%'}"
                    [style.md]="{'max-width': '30%','max-height':'25%'}"
                    [style.lg]="{'max-width': '23%','max-height':'25%'}" 
                    [ngClass]="{'selectedcar' : car.selected}" >
                        <img height="95%" width="95%" [src]="car.url">
                        <div>
                    {{car.description | uppercase}}
                        </div>
                </div>
            </div>
              </md-tab>
  <md-tab label="UTILITÁRIOS" position="0">
              <div class="container"  layout="row" flex>
                <div (click)="select($event, car)" class="borderCar" *ngFor="let car of utilitarios" 
                    [style.xs]="{'max-width': '100%','max-height':'80%'}"
                    [style.sm]="{'max-width': '45%'}"
                    [style.md]="{'max-width': '30%','max-height':'25%'}"
                    [style.lg]="{'max-width': '23%','max-height':'25%'}" 
                    [ngClass]="{'selectedcar' : car.selected}" >
                        <img height="95%" width="95%" [src]="car.url">
                        <div>
                    {{car.description | uppercase}}
                        </div>
                </div>
            </div>
              </md-tab>
              </md-tab-group>
    `,
    styleUrls: ['app/simulation/cardCar/listcars.component.scss']
})

export class ListCars {
   @Input() cars:[Car];
   @Input() utilitarios:[Car];
   @Output() carselect: EventEmitter<Car> = new EventEmitter();
  constructor() {}

public select(event, car) {
    this.carselect.emit(car);

    this.cars.forEach(element => {
        element.selected =false;
    });
       this.utilitarios.forEach(element => {
        element.selected =false;
    });

    car.selected = true;
  }

}


