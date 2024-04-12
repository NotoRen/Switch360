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
  
  selectedVlan:VlanModel=this.vlans[0];

  constructor(private router: Router,private route:ActivatedRoute) {}

  currentForm:string="box"

  ports:PortModel[]=[]

  selectedPort:PortModel=new PortModel("1",this.vlans[1],1)

  portChange(n:number){
    this.nPort=n;
    this.generaPorte()
  }

  generaPorte(){
    if(this.nPort!=this.ports.length){
      if(this.nPort>this.ports.length){
        for(let i=this.ports.length;i<this.nPort;i++){
          let vlan=this.vlans[0]
          let port=new PortModel("FastEthernet",vlan,i+1)
          this.ports?.push(port)
          if(i==0){
            this.selectedPort=port
          } 
      }
    }else{
      for(let i=this.ports.length;i>this.nPort;i--){

        this.ports?.pop()
    }
  }
    }
  }

  changeVlan(){
    let i=this.ports?.indexOf(this.selectedPort)
    this.selectedPort.vlan=this.selectedVlan
    console.log(i,this.nPort)
    console.log(this.selectedPort)
    
  }

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      for(let element in params){
          this.currentForm=params[element]
        }
    })
    
      this.generaPorte()
      //console.log(this.ports)
    }

  selectPort(i:any){
    this.selectedPort=this.ports[i]
    this.selectedVlan=this.selectedPort.vlan
  }
}
