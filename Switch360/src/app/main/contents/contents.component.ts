import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { PortModel } from '../../models/port-model';
import { VlanModel } from '../../models/vlan-model';


@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent {
  nPort:number=24
  numeroPorta:string="1/1"
  velocitaPorta:string="FastEthernet"
  vlans:VlanModel[]=[{
    name: 'Base',
    number: 10,
    color: "rgb(112,112,112)",
  },{
    name: 'Base1',
    number: 11,
    color: "rgb(10,112,35)",
  },{
    name: 'Base2',
    number: 12,
    color: "rgb(112,56,76)",
  },{
    name: 'Base3',
    number: 13,
    color: "rgb(87,21,112)",
  },{
    name: 'Base4',
    number: 14,
    color: "rgb(90,87,43)",
  }]
  

  constructor(private router: Router,private route:ActivatedRoute) {}

  currentForm:string="box"

  

  

  ports?:PortModel[]=[]

  portChange(n:number){
    this.nPort=n;
  }

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      for(let element in params){
          this.currentForm=params[element]
        }
    })
    let vlan=new VlanModel("Base","rgb(112,112,112)",10)
    for(let i=0;i<this.nPort;i++){
      
      let port=new PortModel("FastEthernet",vlan,i+1)
      this.ports?.push(port)
      //console.log(this.ports)
    }
    //console.log(this.ports)
  }

  selectPort(i:any){
    this.numeroPorta="1/"+this.ports![i].number.toString()
    this.velocitaPorta=this.ports![i].speed
    console.log(this.ports![i].speed)
  }
}
