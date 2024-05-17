import { Injectable } from '@angular/core';
import { VlanModel } from '../models/vlan-model';
import { PortModel } from '../models/port-model';
import saveAs from 'file-saver';
import path from 'path';


@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }

  box:any=[]
  vlan:VlanModel[]=[{"name":"default","number":1,"color":"#FFFFFF"}]
  porte:any=[]
  switch:PortModel[]=[]

  salva(){
    let json:any=[this.box,this.vlan,this.porte,this.switch]
    let file = new Blob([`${JSON.stringify(json)}`], { type: 'text/csv;charset=utf-8' });
    saveAs(file, 'switch.json')
  }

  carica(file:any){
    console.log(file)
    localStorage.setItem("lastSave",file);
  }


}

