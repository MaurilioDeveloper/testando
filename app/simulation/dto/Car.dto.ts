import { Acessorio } from './Acessorio.dto';
import { Version } from './Version.dto';
export class Car {
    public id: String;
    public description: String;
    public url: String;
    public selected:Boolean;
    public gender:String;
    public version:Version;
    public acessories:[Acessorio];
    constructor(id,description,url) {
        this.id=id;
        this.description=description;
        this.url=url;
    }
}