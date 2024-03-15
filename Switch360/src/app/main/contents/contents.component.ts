import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { PortModel } from '../../models/port-model';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css'
})
export class ContentsComponent {
  constructor(private router: Router,private route:ActivatedRoute) {}

  currentForm:string="box"

  nPort:number=24

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

    for(let i=0;i<this.nPort;i++){
      let port=new PortModel("fastEthernet","white",i+1)
      this.ports?.push(port)
      console.log(this.ports)
    }
    console.log(this.ports)
  }
}
