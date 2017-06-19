import { ServiceStructure } from './../serviceStructure.interface';
import { UserService } from './../userService.interface';
import { AppService } from './../../app.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'services-available',
    templateUrl: './app/services/available/available.component.html'
})
export class AvailableComponent implements OnInit {

    result: boolean;
    user:UserService;
    structureSelect;

    listStructure : Object[] = [{structureId: null, description: 'Selecione uma Concessionária...'}];
    listService : Object[];


    constructor(private appService: AppService) { }

    ngOnInit() {
        let userSession = this.appService.getSessionUser();
        this.user = { userId: userSession.userId, regionalView: userSession.isRegionalView };
        this.loadStructure();
    }

    loadStructure(){
        let observable = this.appService.xSearchWithData('structureService/questDealershipByUser', this.user );
        observable.subscribe(
            (data) => {
               let response = data.json();
               this.listStructure.push(...response.listStructure);
            },
            err => {
               console.log(err.json());
            }
       );
    }

    consult(){
        let observable = this.appService.xSearch('serviceService/questServiceStructure', this.structureSelect);
        observable.subscribe(
            (data) => {
               let response = data.json();
               if(response.listService != undefined){
                    this.listService = response.listService;
                    this.result = true;
               }
            },
            err => {
               console.log(err.json());
            }
       );
    }

    save(){
        let requestService : ServiceStructure = {listServiceStructure: this.listService};
        let observable = this.appService.xPost('serviceStructureService/updateServiceStructureActive', requestService);
        observable.subscribe();
    }

};