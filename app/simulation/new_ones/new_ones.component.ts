import { Acessorio } from './../dto/Acessorio.dto';
import { Simulation } from './../dto/Simulation.dto';
import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'new-ones',
    templateUrl: 'app/simulation/new_ones/new_ones.component.html',
})
export class NewOnesComponent implements OnInit {

    @Input() simulation: Simulation;
    @Output() changeStep: EventEmitter<boolean> = new EventEmitter<boolean>();
    acessorios: Array<Acessorio> = new Array;
    @Output() rawChange: EventEmitter<string> = new EventEmitter<string>();
    accessory: boolean = false;
    acessorio: Acessorio;

    ngOnInit() {
        this.addAcessorio();
    }

    constructor() {
    };

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        console.log($event);
        // $event.target.value = valor;
    }


    addAcessorio() {
        this.acessorios.push(new Acessorio);
    }

    delAcessorio(acessorio: Acessorio) {
        let index: number = this.acessorios.indexOf(acessorio);
        if (index !== -1) {
            this.acessorios.splice(index, 1);
        }
    }

    states = [
        { value: 'teste', viewValue: 'Teste' },
        { value: 'teste2', viewValue: 'Teste 2' },
    ];

    brands = [
        { value: 'renault', viewValue: 'Renault' },
        { value: 'rci', viewValue: 'RCI' },
        { value: 'nissan', viewValue: 'Nissan' }
    ]

    models = [
        { value: 'clio', viewValue: 'Clio' },
        { value: 'duster', viewValue: 'Duster' },
        { value: 'nissan', viewValue: 'Nissan' }
    ]


}