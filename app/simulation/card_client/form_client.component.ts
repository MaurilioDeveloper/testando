import { Router } from '@angular/router';
import { StepperComponent } from './../../stepper/stepper.component';
import { Simulation } from './../dto/Simulation.dto';
import { Car } from './../dto/Car.dto';
import { Client } from './../dto/Client.dto';
import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'form-client',
	templateUrl: 'app/simulation/card_client/form_client.component.html',
})
export class FormClientComponent implements OnInit {
	@Input() simulation: Simulation;
	@Output() changeStep:EventEmitter<boolean> = new EventEmitter<boolean>();
	private step: StepperComponent;

	ngOnInit() {

	}

	constructor(private router: Router) {
		this.router = router;
	};

	change(toFront: boolean) {
		console.log(this.simulation);
		console.log(this.simulation.saleType.description);
		if(this.simulation.saleType.description == "3") {
			 this.simulation.vizualization = true;
		}
		this.changeStep.emit(toFront);
	}

	states = [
		{ value: 'teste', viewValue: 'Teste' },
		{ value: 'teste2', viewValue: 'Teste 2' },
	];


	@HostListener('document:onchange', ['$event'])
	handelInput(valor) {
		console.log(valor.length);
		if (valor.length == 3) {
			// valor = valor.concat(".");
		}

	}

}