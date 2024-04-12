import { VlanModel } from "./vlan-model";

export class PortModel {
    public id?:string;
    public number:string;
    public speed:string;
    public vlan:VlanModel;
    constructor(s:string,v:VlanModel,n:string){
        this.number=n;
        this.speed=s;
        this.vlan=v;
    }
}
