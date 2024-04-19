import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PortModel } from '../../models/port-model';
import { VlanModel } from '../../models/vlan-model';
import { SwitchService } from '../../services/switch.service';

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
    let box: any = { nome: this.nomeBox, descrizione: this.descrizioneBox };
    this.switchService.box.push(box);
    this.annullaBox();
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
  colorePorta: string = 'Rosso';

  inserisciPorta() {
    let porta: any = {
      tipo: this.tipoPorta,
      velocita: this.velocitaCavo,
      colore: this.colorePorta,
    };
    this.switchService.porte.push(porta);
    this.annullaPorta();
  }

  annullaPorta() {
    this.tipoPorta = 'Rame';
    this.velocitaCavo = 'FastEthernet';
    this.colorePorta = 'Rosso';
  }

  //#endregion

  //#region Switch
  inserisciSwitch(){
      this.switchService.switch=this.ports
  }

  annullaSwitch(){
      this.ports=[]
      this.generaPorte()
  }
  
  //#endregion
  nPort: number = 24;
  selectedVlan: VlanModel = this.switchService.vlan[0];

  

  ports: PortModel[] = [];

  selectedPort: PortModel = new PortModel('1', this.switchService.vlan[1], '0/1');

  portChange(n: number) {
    this.nPort = n;
    this.generaPorte();
  }

  generaPorte() {
    if (this.nPort != this.ports.length) {
      if (this.nPort > this.ports.length) {
        for (let i = this.ports.length; i < this.nPort; i++) {
          let vlan = this.switchService.vlan[0];
          let port = new PortModel('FastEthernet', vlan, '');
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

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      for (let element in params) {
        this.currentForm = params[element];
      }
    });

    this.generaPorte();
    //console.log(this.ports)
  }

  selectPort(i: any) {
    this.selectedPort = this.ports[i];
    this.selectedVlan = this.selectedPort.vlan;
  }
}
