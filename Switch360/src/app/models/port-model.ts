import { porteSwitchModel } from "./porteSwitch-model";
import { VlanModel } from "./vlan-model";

export class PortModel {
    public id?:string;
    public number:string;
    public speed:porteSwitchModel;
    public vlan:VlanModel;
    constructor(s:porteSwitchModel,v:VlanModel,n:string){
        this.number=n;
        this.speed=s;
        this.vlan=v;
    }
}
