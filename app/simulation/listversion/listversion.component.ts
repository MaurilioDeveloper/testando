import { Price } from './../dto/price.dto';
import { Version } from './../dto/Version.dto';
import { AppService } from './../../app.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Simulation } from './../dto/Simulation.dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'listversion',
	templateUrl: 'app/simulation/listversion/listversion.component.html',
	styleUrls: []
})
export class ListVersionComponent implements OnInit {
	@Input() simulation: Simulation;
	constructor(private appService: AppService) { }

	versions: Array<Version>;
	verselect: Version;

	yearManu: Array<Number>;
	yearSelect: Number;

	versionsYears: Array<Version>;
	versionSelected: Version;




	valueSelect: Price;


	ngOnInit() {
		let buscaver = {};
		buscaver["modelId"] = this.simulation.car.id;
		buscaver["vehicleType"] = "NOVO";
		let carsget = this.appService.xSearchWithData('vehicleVersion', buscaver);
		carsget.subscribe(
			(data) => {
				let listver: Array<Version> = new Array();
				let response = data.json();

				for (var i = 0; i < response.vehicleVersionDtoList.length; i++) {
					let vehicleVer = response.vehicleVersionDtoList[i];
					let ver: Version = new Version;
					ver.description = vehicleVer["description"];
					ver.fipe = vehicleVer["fipe"];
					listver.push(ver);
				}
				this.versions = listver;
				this.verselect = this.versions[0];
				this.changeVersion(this.verselect);
			},
			err => {
				console.log(err.json());
			}
		);
	}


	changeVersion(newValue) {
		//reload

		let buscaManuYear = {};
		buscaManuYear["description"] = this.verselect.description;
		buscaManuYear["fipe"] = this.verselect.fipe;
		buscaManuYear["vehicleType"] = "NOVO";
		let yearsManuget = this.appService.xSearchWithData('vehicleVersion/manufactureYears', buscaManuYear);

		yearsManuget.subscribe(
			(data) => {
				let listyear: Array<Number> = new Array();
				let response = data.json();

				for (var i = 0; i < response.manufactureYears.length; i++) {
					let vehicleVer = response.manufactureYears[i];
					listyear.push(vehicleVer);
				}
				this.yearManu = listyear;
				this.yearSelect = this.yearManu[this.yearManu.length - 1];
				this.changeManuYear(this.yearSelect);
			},
			err => {
				console.log(err.json());
			}
		);

	} // don't forget to update the model here
	// ... do other stuff here ...


	changeManuYear(newValue) {
	let buscaModelYear = {};
		buscaModelYear["description"] = this.verselect.description;
		buscaModelYear["fipe"] = this.verselect.fipe;
		buscaModelYear["vehicleType"] = "NOVO";
		buscaModelYear["manufactureYear"] = this.yearSelect;
		let yearsManuget = this.appService.xSearchWithData('vehicleVersion/modelYears', buscaModelYear);

		yearsManuget.subscribe(
			(data) => {
				let listyear: Array<Version> = new Array();
				let response = data.json();
				console.log(response)
				for (var i = 0; i < response.modelYears.length; i++) {
					let vehicleVer = response.modelYears[i];
					let ver: Version = new Version;
					ver.id = vehicleVer["versionId"];
					ver.description = this.verselect.description;
					ver.fipe = this.verselect.fipe;
					ver.yearManufacture = this.yearSelect;
					ver.yearModel = vehicleVer["yearModel"]
					listyear.push(ver);
				}
				this.versionsYears = listyear;
				this.versionSelected = this.versionsYears[this.versionsYears.length - 1];
				this.getValue(this.versionSelected);
			},
			err => {
				console.log(err.json());
			}
		);

	}



	getValue(newValue) {

		let valueGet = this.appService.xSearch('vehiculePrice', this.versionSelected.id);

		valueGet.subscribe(
			(data) => {
				let listyear: Array<Version> = new Array();
				let response = data.json();
				let value = response.vehiclePriceDTO;
				this.valueSelect = new Price;
				this.valueSelect.id=value["id"];
				this.valueSelect.amount = value["amount"];
				this.versionSelected.price=this.valueSelect;
				this.simulation.car.version=this.versionSelected;
			},
			err => {
				console.log(err.json());
			}
		);
		console.log(newValue);
	}





}
