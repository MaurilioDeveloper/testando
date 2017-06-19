import { AppMessage } from './../app.message';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'salesman_communication',
    templateUrl: './app/salesman_communication/salesman_communication.component.html'
})
export class SalesmanCommunicationComponent implements OnInit{

    private socket: WebSocket;

    public constructor(private appMessage : AppMessage){
    }

    public ngOnInit(){
        this.socket = new WebSocket("ws://10.27.104.1:8080/omega2-async-communication/salesman_communication");
        this.socket.onopen = event => {
        }
        this.socket.onclose = event => {
        }
        this.socket.onmessage = event => {
            this.appMessage.showInfo(event.data);
        }
    }

} 
