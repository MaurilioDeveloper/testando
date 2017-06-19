import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { MdDialog } from '@angular/material';
import { AcessoriesOptionsDialog } from './../acessoriesOptionsDialog/acessoriesOptions.dialog';
import { AppService } from './../../app.service';
import { Car } from './../dto/Car.dto';
import { SaleType } from './../dto/SaleType.dto';
import { Simulation } from './../dto/Simulation.dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'carselect',
	templateUrl: 'app/simulation/carselect/carselect.html',
	styleUrls: []
})
export class CarselectComponent implements OnInit {
	@Input() simulation: Simulation;
	@Output() changeStep:EventEmitter<boolean> = new EventEmitter<boolean>();
	showcar: Boolean;
	cars: Array<Car>;
	utilitarios: Array<Car>;

	carselect(car: Car) {
		this.showcar = false;
		if(this.simulation.car){
			if(car.id === this.simulation.car.id && car.gender === this.simulation.car.gender){
				return
			}
		}
		this.simulation.car = car;
	}

	constructor(private appService: AppService,public dialog: MdDialog) { }

	// idBrand nissan 63  HOt_Tjfj2ySFLtVj9Jt6Kw
	// idBrand renault 68  R2q8eId7z_MHQOCUIyD_tg


	ngOnInit() {
		if(this.simulation.car){
			console.log(this.simulation.car.id)
		}
		this.showcar = true;
		let buscacar = {};
		buscacar["idBrand"] = "R2q8eId7z_MHQOCUIyD_tg";
		buscacar["vehicleType"] = "NOVO";
		let buscautilitarios = { ...buscacar };

		buscacar["vehicleGender"] = "PARTICULAR";
		buscautilitarios["vehicleGender"] = "UTILITARIO";

		let carsget = this.appService.xSearchWithData('vehiculeModel/gender', buscacar);

		carsget.subscribe( 
			(data) => {
				let response = data.json();
				this.cars = this.getCarsWithGender(response.listVehicleModel,buscacar["vehicleGender"]);
			},
			err => {
				console.log(err.json());
			}
		);


		let utilget = this.appService.xSearchWithData('vehiculeModel/gender', buscautilitarios);

		utilget.subscribe(
			(data) => {
				let response = data.json();
				this.utilitarios = this.getCarsWithGender(response.listVehicleModel,buscautilitarios["vehicleGender"]);
			},
			err => {
				console.log(err.json());
			}
		);
	}

	getCarsWithGender(listVehicleModel: Array<object>,gender) {
		let listcar: Array<Car> = new Array();
		for (var i = 0; i < listVehicleModel.length ; i++) {
			let result = listVehicleModel[i];
			//TODO:FOTOS estão em mock ainda tem que ver certinho como puxar
			let car = new Car(result['id'], result['description'], "https://www.renaultretail.co.uk/assets/rr/images/vehicle/new-renault/vehicle-images/cars/renault-clio/range/09-renault-clio-glacier-white.png");
			car.gender=gender;
			if(this.simulation.car){
				if(car.id === this.simulation.car.id && car.gender === this.simulation.car.gender ){
					car.selected = true;
				}
			}
			listcar.push(car);
		}
		return listcar;
	}


	acessorios(){
		//aqui vai abrir a modal
		let dialogRef = this.dialog.open(AcessoriesOptionsDialog);
		dialogRef.componentInstance.simulation= this.simulation
		dialogRef.afterClosed().subscribe(result => {
			console.log(this.simulation)
		});

	}
	change(toFront: boolean) {
		console.log(this.simulation);
		console.log(this.simulation.saleType.description);
		if(this.simulation.saleType.description == "3") {
			 this.simulation.vizualization = true;
		}
		this.changeStep.emit(toFront);
	}
}
