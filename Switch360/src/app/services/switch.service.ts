import { Injectable } from '@angular/core';
import { VlanModel } from '../models/vlan-model';
import { PortModel } from '../models/port-model';
import { SwitchModel } from '../models/switch-model';
import saveAs from 'file-saver';
import { BoxModel } from '../models/box-model';
import { porteSwitchModel } from '../models/porteSwitch-model';



@Injectable({
  providedIn: 'root'
})
export class SwitchService {

  constructor() { }
  
  caricaDati(){
    let file:any=localStorage.getItem("lastSave");
    if(file!=null){
      file=JSON.parse(file)
      this.box=file.box
      this.vlan=file.vlan
      this.porte=file.porte
      this.switch=file.switch
    }
    else{
      this.box=[]
      this.vlan=[]
      this.porte=[]
      this.switch=[]
    }
    
  }

  salvaDati(){
    let json:any={"box":this.box,"vlan":this.vlan,"porte":this.porte,"switch":this.switch}
    let save=JSON.stringify(json)
    localStorage.setItem("lastSave",save); 

  }

  cancellaDati(){
    localStorage.clear();
    this.caricaDati()
  }

  box:BoxModel[]=[{"name":"Default","desc":"Default"}]
  vlan:VlanModel[]=[{"name":"Default","number":1,"color":"#FFFFFF"}]
  porte:porteSwitchModel[]=[{ "tipo": "Rame", "velocita": "FastEthernet", "colore": "Bianco"}]
  switch:SwitchModel[]=[]

  salva(){
    let json:any={"box":this.box,"vlan":this.vlan,"porte":this.porte,"switch":this.switch}
    let file = new Blob([`${JSON.stringify(json)}`], { type: 'text/csv;charset=utf-8' });
    saveAs(file, 'switch.json')
  }

  carica(file:any){
    console.log(file)
    let save=JSON.stringify(file)
    localStorage.setItem("lastSave",save); 
    this.box=file.box
    this.vlan=file.vlan
    this.porte=file.porte
    this.switch=file.switch
  }


}

