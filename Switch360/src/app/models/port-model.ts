export class PortModel {
    public id?:string;
    public number:number;
    public speed:string;
    public vlan:string;
    constructor(s:string,v:string,n:number){
        this.number=n;
        this.speed=s;
        this.vlan=v;
    }
}
