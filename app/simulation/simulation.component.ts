import { AppService } from './../app.service';
import { SaleType } from './dto/SaleType.dto';
import { State } from './dto/State.dto';
import { Client } from './dto/Client.dto';
import { Simulation } from './dto/Simulation.dto';
import { Component, OnInit, Input } from '@angular/core';

import { StepperComponent } from './../stepper/stepper.component';

@Component({
  selector: 'simulation',
  templateUrl: './app/simulation/simulation.component.html'
})

export class SimulationComponent implements OnInit {
  steep: number = 0;
  @Input() proposalid: Simulation;

  simulation: Simulation;
  constructor(private appService: AppService) {

  };


  typesGrace = [
    { value: 'teste', viewValue: 'Teste' },
    { value: 'teste2', viewValue: 'Teste 2' },
  ];


  ngOnInit() {
    if (this.proposalid) {
      //this.simulation =  consulta da simulacao
      this.simulation.vizualization = true;
    } else {
      this.simulation = new Simulation;
      this.simulation.client = new Client;
      this.simulation.saleType = new SaleType;
      this.simulation.vizualization = false;
    }
  }

  changeStep(toFront: boolean) {
    if (toFront) {

      if (this.steep == 4) {
        return
      }
      this.steep++;
    } else {
      if (this.steep == 0) {
        return
      }
      this.steep--;
    }

  }

  sendByEmail(idProposal: string) {
    //this.appService.xSearchWithData("proposalService/sendEmail",idProposal);
    //teste
    let email = this.appService.xSearch("proposalService", "sendEmail/m2W1ZHVkLQKKCJYHaDOUzA");
    email.subscribe(
      err => {
        console.log(err.json());
      }
    );
  }

  print(idProposal: string) {
    //this.appService.xSearchWithData("proposalService/sendEmail",idProposal);
    //teste
    let email = this.appService.xSearch("proposalService", "print/m2W1ZHVkLQKKCJYHaDOUzA");
    email.subscribe(
      (data) => {
        let response = data.json();
      },
      err => {
        console.log(err.json());
      }
    );
  }

}