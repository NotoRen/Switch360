export class VlanModel {
    public id?:string;
    public number:number;
    public name:string;
    public color:string;
    constructor(name:string,color:string,n:number){
        this.number=n;
        this.name=name;
        this.color=color;
    }
}
