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
// import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
// import { IPageChangeEvent } from '@covalent/core';
var CommissionLevelComponent = (function () {
    function CommissionLevelComponent() {
        this.concessionarias = [
            { value: 'teste-0', viewValue: 'teste 1' },
            { value: 'teste-1', viewValue: 'teste 2' },
        ];
        this.data = [
            { sku: '1452-2', item: 'Pork Chops', price: 32.11 },
            { sku: '1421-0', item: 'Prime Rib', price: 41.15 },
        ];
        /* columns: ITdDataTableColumn[] = [
             { name: 'sku', label: 'SKU #', tooltip: 'Stock Keeping Unit' },
             { name: 'item', label: 'Item name' },
             { name: 'price', label: 'Price (US$)', numeric: true, format: v => v.toFixed(2), filter: true },
         ];
     
         filteredData: any[] = this.data;
         filteredTotal: number = this.data.length;
     
         searchTerm: string = '';
         fromRow: number = 1;
         currentPage: number = 1;
         pageSize: number = 5;
         sortBy: string = 'sku';
         sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Descending;
     
     */
        this.dadosTeste = {
            "table": {
                "columns": {
                    "column": [
                        {
                            "-dataLiberacaoColumn": "dataLiberacao",
                            "label": "Data Liberação",
                            "-fCode": "f9",
                            "-value": "column1"
                        },
                        {
                            "-liberadorPorColumn": "liberadoPor",
                            "label": "Liberado por",
                            "-fCode": "f25",
                            "-value": "column2"
                        },
                        {
                            "-averageDemand": "vendedorGerente",
                            "label": "Vendedor / Gerenete",
                            "-fCode": "f564",
                            "-value": "column3"
                        },
                        {
                            "-warehouse": "Article.warehouse",
                            "label": "Retorno Liberado ",
                            "-fCode": "f295",
                            "-value": "column4"
                        },
                        {
                            "-warehouse": "Article.warehouse",
                            "label": "Produto ",
                            "-fCode": "f295",
                            "-value": "column5"
                        },
                        {
                            "-warehouse": "Article.warehouse",
                            "label": "Tipo de Venda ",
                            "-fCode": "f295",
                            "-value": "column6"
                        },
                        {
                            "-warehouse": "Article.warehouse",
                            "label": "Validade ",
                            "-fCode": "f295",
                            "-value": "column7"
                        },
                        {
                            "-warehouse": "Article.warehouse",
                            "label": "Proposta ",
                            "-fCode": "f295",
                            "-value": "column8"
                        },
                    ]
                },
                "rows": {
                    "row": [
                        {
                            "column1": "151110103",
                            "column2": "100",
                            "column3": "500",
                            "column4": "TOT",
                            "column5": "TOT",
                            "column6": "TOT",
                            "column7": "TOT",
                            "column8": "TOT"
                        },
                        {
                            "column1": "151110103",
                            "column2": "100",
                            "column3": "500",
                            "column4": "TOT",
                            "column5": "TOT",
                            "column6": "TOT",
                            "column7": "TOT",
                            "column8": "TOT"
                        },
                        {
                            "column1": "151110103",
                            "column2": "100",
                            "column3": "500",
                            "column4": "TOT",
                            "column5": "TOT",
                            "column6": "TOT",
                            "column7": "TOT",
                            "column8": "TOT"
                        },
                        {
                            "column1": "151110103",
                            "column2": "100",
                            "column3": "500",
                            "column4": "TOT",
                            "column5": "TOT",
                            "column6": "TOT",
                            "column7": "TOT",
                            "column8": "TOT"
                        },
                        {
                            "column1": "151110103",
                            "column2": "100",
                            "column3": "500",
                            "column4": "TOT",
                            "column5": "TOT",
                            "column6": "TOT",
                            "column7": "TOT",
                            "column8": "TOT"
                        }
                    ]
                }
            }
        };
    }
    CommissionLevelComponent.prototype.ngOnInit = function () {
        // this.filter();
    };
    /*
        sort(sortEvent: ITdDataTableSortChangeEvent): void {
            this.sortBy = sortEvent.name;
            this.sortOrder = sortEvent.order;
            this.filter();
        }
    
        search(searchTerm: string): void {
            this.searchTerm = searchTerm;
            this.filter();
        }
    
        page(pagingEvent: IPageChangeEvent): void {
            this.fromRow = pagingEvent.fromRow;
            this.currentPage = pagingEvent.page;
            this.pageSize = pagingEvent.pageSize;
            this.filter();
        }
    
        filter(): void {
            let newData: any[] = this.data;
            let excludedColumns: string[] = this.columns
                .filter((column: ITdDataTableColumn) => {
                    return ((column.filter === undefined && column.hidden === true) ||
                        (column.filter !== undefined && column.filter === false));
                }).map((column: ITdDataTableColumn) => {
                    return column.name;
                });
            newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
            this.filteredTotal = newData.length;
            newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
            newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
            this.filteredData = newData;
        }
        
        */
    CommissionLevelComponent.prototype.mostrarLiberacoesRealizadas = function (show) {
        this.mostrar = show;
    };
    return CommissionLevelComponent;
}());
CommissionLevelComponent = __decorate([
    core_1.Component({
        selector: 'app-commission',
        templateUrl: './app/commission_level/commission_level.component.html',
    }),
    __metadata("design:paramtypes", [])
], CommissionLevelComponent);
exports.CommissionLevelComponent = CommissionLevelComponent;
;
//# sourceMappingURL=commission_level.component.js.map