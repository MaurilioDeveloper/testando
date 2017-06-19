import { MyAgreement } from './my_agreement.interface';
import { StructureMyAgreement } from './structureMyAgreement.interface';
import { UserMyAgreement } from './userMyAgreement.interface';
import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'my-agreement',
  templateUrl: './app/my_agreement/my_agreement.component.html'
})
export class MyAgreementComponent implements OnInit{

    user:UserMyAgreement;
    structure:StructureMyAgreement;
    filter: MyAgreement;
    showConsult: boolean = false;
    
    listPersonType = [];
    listDossierStatus : Object[] =  [{dossierStatusId: null, description: 'Selecionar um status...'}];
    listStructure : Object[] = [{structureId: null, description: 'Selecionar uma concessionária...'}];
    listSalesman : Object[] = [{dossierStatusId: null, name: 'Selecionar um vendedor...'}];
    listSaleType : Object[] = [{saleTypeId: null, description: 'Selecionar um tipo de venda...'}];

    listDossiers = [];

    constructor(private appService: AppService) { }
    

    ngOnInit() {
        let userSession = this.appService.getSessionUser();
        this.user = { userId: userSession.userId, regionalView: userSession.isRegionalView };
        this.loadSelect(this.user);
        this.loadForm();
    };

    private loadForm(){
            this.filter = {idDossier: null,
                           adp :null,
                           typePerson:null,
                           cpfCnpj:null,
                           nameClient:null,
                           proposedStatus:null,
                           dateCreationInit: null,
                           dateCreationEnd:null,
                           dateExpirationInit:null,
                           dateExpirationEnd:null,
                           salesman:null,
                           dealership:null,
                           userId:this.user.userId,
                           regionalView: this.user.regionalView,
                           saleTypeId:null,
                           taxTc:false };
    }
  
    private loadSelect(user:UserMyAgreement){
        let observable = this.appService.xSearchWithData('myAgreementService/myAgreementSelect', user );

       observable.subscribe(
            (data) => {
               let response = data.json();
               this.listDossierStatus.push(...response.listDossierStatus);
               this.listStructure.push(...response.listStructure);
               this.listSaleType.push(...response.listSaleType);
               this.listPersonType = (response.listPersonType);
            },
            err => {
               console.log(err.json());
            }
       );
    }

    public loadSalesman(structureSelected){
        this.structure = { structureId: structureSelected};
        let observable = this.appService.xSearchWithData('personService/questSalesmanDealership', this.structure );

        observable.subscribe(
                (data) => {
                     let response = data.json();
                     this.listSalesman.push(...response.listPerson);
                },
                err => {
                console.log(err.json());
                }
        );    
    }

    public clearMyAgreement(){
        this.loadForm();
    }

    public consult(filter:MyAgreement){
        filter;
        let observable = this.appService.xSearchWithData('dossierService/myDossier', filter );
        observable.subscribe(
                (data) => {
                     let response = data.json();
                     if (response.listDossiers != undefined) {
                        this.listDossiers = response.listDossiers;
                        this.showConsult = true;
                     } else {
                        this.showConsult = false;
                     }
                },
                err => {
                console.log(err.json());
                }
        );
    }
}