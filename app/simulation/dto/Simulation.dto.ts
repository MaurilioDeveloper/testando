import { Brand } from './Brand.dto';
import { SaleType } from './SaleType.dto';
import { Client } from './Client.dto';
import { Car } from './Car.dto';


export class Simulation{
    public id: String;
    public car:Car;
    public client:Client;
    public saleType:SaleType;
    public tc:Boolean; 
    public istaxi:Boolean;
    public adpted:Boolean;
    public vizualization:Boolean;
    public brand:Brand;
      constructor() {
    }
}