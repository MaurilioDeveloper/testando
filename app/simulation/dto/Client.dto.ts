import { State } from './State.dto';
export class Client {
    public id: String;
    public name: String;
    public cpf: String;
    public cnpj: String;
    public telephone:String;
    public state:State;
 
    constructor() {
    }
}