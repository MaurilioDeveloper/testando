import { MdDialog, MdDialogRef } from '@angular/material';
import { Simulation } from './../dto/Simulation.dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'simulationInfo',
	templateUrl: 'app/simulation/simulationinfo/simulationInfo.component.html',
	styleUrls: ['app/simulation/simulationinfo/tc-select-dialog.scss']
})
export class SimulationInfoComponent implements OnInit {
	@Input() simulation: Simulation;


	constructor(public dialog: MdDialog) { }


	openDialog() {
		let dialogRef = this.dialog.open(SelectTcDialog);
		dialogRef.componentInstance.tc= this.simulation.tc
		dialogRef.afterClosed().subscribe(result => {
			this.simulation.tc = result;
		});

	}
	ngOnInit() {

	}
}



@Component({
	selector: 'opem-tc-dialog',
	templateUrl: 'app/simulation/simulationinfo/tc-select-dialog.html'
})
export class SelectTcDialog {
	tc:Boolean;
	constructor(public dialogRef: MdDialogRef<SelectTcDialog>) { }

}


