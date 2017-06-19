"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DealerProposalComponent = (function () {
    function DealerProposalComponent() {
        this.teste = 'teste';
        this.hide = false;
        this.conce = [
            { value: 'default-0', viewValue: 'default' },
            { value: 'teste-1', viewValue: 'teste' },
            { value: 'teste-2', viewValue: 'teste1' }
        ];
        this.foods = [
            { value: 'teste-0', viewValue: 'teste1' },
            { value: 'teste-1', viewValue: 'teste2' },
            { value: 'teste-2', viewValue: 'teste3' }
        ];
    }
    ;
    DealerProposalComponent.prototype.hideDealer = function () {
        if (this.hide == false) {
            this.hide = true;
        }
        else {
            this.hide = false;
        }
    };
    return DealerProposalComponent;
}());
DealerProposalComponent = __decorate([
    core_1.Component({
        selector: 'dealer-proposal',
        templateUrl: './app/dealer_proposal/dealer_proposal.component.html'
    }),
    __metadata("design:paramtypes", [])
], DealerProposalComponent);
exports.DealerProposalComponent = DealerProposalComponent;
;
//# sourceMappingURL=dealer_proposal.component.js.map