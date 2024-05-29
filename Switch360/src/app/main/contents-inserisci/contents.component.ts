import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PortModel } from '../../models/port-model';
import { VlanModel } from '../../models/vlan-model';
import { SwitchService } from '../../services/switch.service';
import { SwitchModel } from '../../models/switch-model';
import { BoxModel } from '../../models/box-model';
import { porteSwitchModel } from '../../models/porteSwitch-model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css'],
})
export class ContentsComponent {
  constructor(
    private route: ActivatedRoute,
    public switchService: SwitchService
  ) {}

  currentForm: string = 'box';

  //#region Box
  nomeBox: string = '';
  descrizioneBox: string = '';

  inserisciBox() {
    let box: any = { name: this.nomeBox, desc: this.descrizioneBox };
    this.switchService.box.push(box);
    this.annullaBox();
    this.switchService.salvaDati()
    Swal.fire("Box inserito correttamente", "success");
  }

  annullaBox() {
    this.nomeBox = '';
    this.descrizioneBox = '';
  }

  //#endregion

  //#region Vlan

  nomeVlan: string = '';
  numeroVlan: number = 1;
  coloreVlan: string = '#FFFFFF';

  inserisciVlan() {
    let vlan: VlanModel = {
      name: this.nomeVlan,
      number: this.numeroVlan,
      color: this.coloreVlan,
    };
    this.switchService.vlan.push(vlan);
    this.annullaVlan();
    this.switchService.salvaDati()
    
    Swal.fire("Vlan inserita correttamente", "success");
  }

  annullaVlan() {
    this.nomeVlan = '';
    this.numeroVlan = 1;
    this.coloreVlan = '#FFFFFF';
  }

  //#endregion

  //#region Porta

  tipoPorta: string = 'Rame';
  velocitaCavo: string = 'FastEthernet';
  colorePorta: string = 'white';

  inserisciPorta() {
    let porta: any = {
      tipo: this.tipoPorta,
      velocita: this.velocitaCavo,
      colore: this.colorePorta,
    };
    this.switchService.porte.push(porta);
    this.annullaPorta();
    this.switchService.salvaDati()
    Swal.fire("Porta inserita correttamente", "success");
  }

  annullaPorta() {
    this.tipoPorta = 'Rame';
    this.velocitaCavo = 'FastEthernet';
    this.colorePorta = 'white';
  }

  //#endregion

  //#region Switch
  nomeSwitch:String="Default";
  inserisciSwitch(){
      console.log(this.nomeSwitch)
      this.switchService.switch.push(new SwitchModel(this.nomeSwitch,this.ports,this.selectedBox))
      this.switchService.salvaDati()
      this.annullaSwitch()
      
    Swal.fire("Switch inserito correttamente", "success");
  }

  annullaSwitch(){
      this.ports=[]
      this.generaPorte()
  }
  
  copied:any

  copiaSwitch(){
    this.copied=this.selectedPort
  }

  incollaSwitch(){
    this.ports[this.index].speed=this.copied.speed
    this.ports[this.index].vlan=this.copied.vlan
    this.selectedVlan=this.ports[this.index].vlan
  }

  //#endregion
  nPort: number = 24;
  selectedVlan: VlanModel = this.switchService.vlan[0];
  selectedBox:BoxModel=this.switchService.box[0];
  

  ports: PortModel[] = [];

  selectedPort: PortModel = new PortModel(this.switchService.porte[0], this.switchService.vlan[1], '0/1');

  selectedPorta: porteSwitchModel=this.switchService.porte[0]

  
  

  portChange(n: number) {
    this.nPort = n;
    this.generaPorte();
  }

  generaPorte() {
    if (this.nPort != this.ports.length) {
      if (this.nPort > this.ports.length) {
        for (let i = this.ports.length; i < this.nPort; i++) {
          let vlan = this.switchService.vlan[0];
          let port = new PortModel(this.switchService.porte[0], vlan, '');
          if (i < 24) port.number = '0/' + (i + 1);
          else port.number = '1/' + (i - 23);
          this.ports?.push(port);
          if (i == 0) {
            this.selectedPort = port;
          }
        }
      } else {
        for (let i = this.ports.length; i > this.nPort; i--) {
          this.ports?.pop();
        }
      }
    }
  }

  changeVlan() {
    let i = this.ports?.indexOf(this.selectedPort);
    this.selectedPort.vlan = this.selectedVlan;
    console.log(i, this.nPort);
    console.log(this.selectedPort);
  }

  changePorta(){
    console.log()
    let i = this.ports?.indexOf(this.selectedPort);
    this.selectedPort.speed = this.selectedPorta;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      for (let element in params) {
        this.currentForm = params[element];
      }
      console.log(params,this.currentForm)
    });

    this.generaPorte();
    //console.log(this.ports)
  }

  index:number=0

  selectPort(i: any) {
    this.index=i
    this.selectedPort = this.ports[i];
    this.selectedVlan = this.selectedPort.vlan;
    this.selectedPorta=this.selectedPort.speed
    
  }
}
