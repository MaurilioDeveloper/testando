import { Component, Input, Output, EventEmitter,OnChanges,ChangeDetectionStrategy,ElementRef } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'stepper',
  templateUrl: './app/stepper/stepper.component.html'
})


export class StepperComponent{

  @Input() steep: number;

  @Output() changeStep:EventEmitter<boolean> = new EventEmitter<boolean>();
  leftIcon:String;
  leftText:String;
  rightIcon:String;
  rightText:String;
  stepFour: String;

  change(toFront: boolean) {
    this.changeStep.emit(toFront);
  }

   ngOnChanges(...args: any[]) {
      switch (this.steep) {
        case 0:
          this.rightIcon = 'directions_car';
          this.rightText = 'Editar <br>Veiculo';
          this.stepFour = 'stepNo';
        break;
        case 1:
          this.leftIcon = 'person';
          this.leftText = 'Editar <br>Cliente';
          this.rightIcon = 'keyboard';
          this.rightText = 'Editar <br>Simulação';
          this.stepFour = 'stepNo';
          
        break;
        case 2:
          this.leftIcon = 'directions_car';
          this.leftText = 'Editar <br>Veiculo';
          this.rightIcon = 'recent_actors';
          this.rightText = 'Ficha do  <br>Cliente';
          this.stepFour = 'stepNo';
        break;
        case 3:
          this.leftIcon = 'keyboard';
          this.leftText = 'Editar <br>Simulação';
          this.rightIcon = 'near_me';
          this.rightText = 'Enviar <br>Proposta';
          this.stepFour = 'stepNo';
        break;
        case 4:
          this.leftIcon = 'near_me';
          this.leftText = 'Voltar para<br>Envio';
          this.rightIcon = 'description';
          this.rightText = 'Documentação<br>Disponível';
          this.stepFour = 'stepFour';
        break;
      
        default:
          break;
      }

        console.log(this.steep);

    }


    /**/

    constructor(){
        
    };

}