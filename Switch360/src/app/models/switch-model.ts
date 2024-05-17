import { VlanModel } from "./vlan-model";
import { PortModel } from "./port-model";
import { BoxModel } from "./box-model";

export class SwitchModel {
    public name:String;
    public ports:PortModel[]
    public box:BoxModel
    constructor(n:String,p:PortModel[],b:BoxModel){
        this.name=n;
        this.ports=p;
        this.box=b;
    }
}
