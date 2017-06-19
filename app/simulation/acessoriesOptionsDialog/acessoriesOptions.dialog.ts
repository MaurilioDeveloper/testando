import { Option } from './../dto/Option.dto';
import { AppService } from './../../app.service';
import { Version } from './../dto/Version.dto';
import { Simulation } from './../dto/Simulation.dto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'acessories-options-dialog',
    templateUrl: 'app/simulation/acessoriesOptionsDialog/acessoriesOptions.dialog.html'
})
export class AcessoriesOptionsDialog implements OnInit {
    simulation: Simulation;
    options: Array<Option> = new Array<Option>();

    ngOnInit(): void {

        let observable = this.appService.xSearch('vehicleVersionOptions', this.simulation.car.version.id);

        observable.subscribe(
            (data) => {
                let response = data.json();
                console.log(response)
                for (var index = 0; index < response.listOptions.length; index++) {
                    let opt = response.listOptions[index];
                    let option: Option = new Option;
                    option.id = opt["id"]
                    option.description = opt["description"]
                    option.amount = opt["amount"]
                    this.options.push(option);
                }

            },
            err => {
                console.log(err.json());
            }
        );


    }
    checked(model) {
        console.log(model)
        return false;
    }
    updateCheckedOptions(model, evento) {
        console.log(model)
        console.log(evento)
        this.simulation.car.version.options

        this.simulation.car.version.price.amount += model.a
    }
    constructor(private appService: AppService) {

    }


}