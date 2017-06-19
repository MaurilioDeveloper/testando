import {Component} from '@angular/core';


@Component({
    selector: 'dealer-proposal',
    templateUrl: './app/dealer_proposal/dealer_proposal.component.html'
})
export class DealerProposalComponent {

    private teste: string = 'teste';
    private hide: boolean = false;

    constructor(){
    };

    conce = [
    {value: 'default-0', viewValue: 'default'},
    {value: 'teste-1', viewValue: 'teste'},
    {value: 'teste-2', viewValue: 'teste1'}
  ];

    foods = [
    {value: 'teste-0', viewValue: 'teste1'},
    {value: 'teste-1', viewValue: 'teste2'},
    {value: 'teste-2', viewValue: 'teste3'}
  ];

  hideDealer() {
    if(this.hide==false){
      this.hide = true;
    }else{
       this.hide = false;
    }
  }




};