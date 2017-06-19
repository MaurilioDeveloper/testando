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
var PromotionalImagesComponent = (function () {
    function PromotionalImagesComponent() {
        this.showCard = false;
        this.marcas = [
            { value: 'nissan-0', viewValue: 'Nissan' },
            { value: 'renault-1', viewValue: 'Renault' },
            { value: 'rci-2', viewValue: 'Banco RCI' }
        ];
    }
    PromotionalImagesComponent.prototype.searchImage = function () {
        console.log(this.showCard);
        this.showCard = true;
        console.log(this.showCard);
    };
    ;
    return PromotionalImagesComponent;
}());
PromotionalImagesComponent = __decorate([
    core_1.Component({
        selector: 'promo-images',
        templateUrl: './app/promotional_images/promotional_images.component.html'
    }),
    __metadata("design:paramtypes", [])
], PromotionalImagesComponent);
exports.PromotionalImagesComponent = PromotionalImagesComponent;
;
//# sourceMappingURL=promotional_images.component.js.map