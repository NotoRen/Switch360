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
      this.box=[{"name":"Default","desc":"Default Box"}]
      this.vlan=[{"number":1,"name":"Default","color":"white"}]
      this.porte=[{"tipo":"Rame","velocita":"FastEthernet","colore":"white"}]
      this.switch=[{
        "name": "Default",
        "ports": [
          {
            "number": "0/1",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/2",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/3",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/4",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/5",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/6",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/7",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/8",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/9",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/10",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/11",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/12",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/13",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/14",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/15",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/16",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/17",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/18",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/19",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/20",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/21",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/22",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/23",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          },
          {
            "number": "0/24",
            "speed": {
              "tipo": "Rame",
              "velocita": "FastEthernet",
              "colore": "Bianco"
            },
            "vlan": { "number": 1, "name": "Default", "color": "white" }
          }
        ],
        "box": { "name": "Default", "desc": "Default Box" }
      }]
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

