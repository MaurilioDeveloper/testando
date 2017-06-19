import { Acessorio } from './Acessorio.dto';
import { Option } from './Option.dto';
import { Price } from './Price.dto';
export class Version {
    public id: String;
    public description: String;
    public fipe:String;
    public yearManufacture:Number;
    public yearModel:Number;
    public price:Price;
    public options:[Option]
    public acessories:[Acessorio]
    constructor() {
    }
}