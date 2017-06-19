import { AcessoriesOptionsDialog } from './acessoriesOptionsDialog/acessoriesOptions.dialog';
import { BrlPipeDirective } from './../commons/value/brlDiretive';
import { BrlPipe } from './../commons/value/brlpipe';
import { NewOnesComponent } from './new_ones/new_ones.component';
import { FormClientComponent } from './card_client/form_client.component';
import { ListVersionComponent } from './listversion/listversion.component';
import { FormsModule } from '@angular/forms';
import { SimulationInfoComponent, SelectTcDialog } from './simulationInfo/simulationInfo.component';
import { SimulationComponent } from './simulation.component';
import { NgModule, Pipe } from '@angular/core';
import { ListCars } from './cardCar/listCars.component';
import { CarselectComponent } from './carselect/carselect.component';
import { MdRadioModule, MdDialogModule, MaterialModule } from '@angular/material';
import { FlexLayoutModule }             from '@angular/flex-layout';

import { BrowserModule } from '@angular/platform-browser';



export const SimulationComponents = {
  components: [SimulationComponent,
    ListCars, CarselectComponent, SimulationInfoComponent, FormClientComponent, ListVersionComponent, NewOnesComponent
  ],
};

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialModule,MdRadioModule,MdDialogModule],
  declarations: [SelectTcDialog,AcessoriesOptionsDialog,BrlPipe,BrlPipeDirective],
  bootstrap: [SelectTcDialog,AcessoriesOptionsDialog],
  exports: [BrlPipe,MaterialModule], 

})
export class SimulationModule { }