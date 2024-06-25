import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SwitchService } from '../../services/switch.service';
import { BoxModel } from '../../models/box-model';
import { VlanModel } from '../../models/vlan-model';
import { PortModel } from '../../models/port-model';
import { porteSwitchModel } from '../../models/porteSwitch-model';
import { SwitchModel } from '../../models/switch-model';

@Component({
  selector: 'app-content-modifica',
  templateUrl: './content-modifica.component.html',
  styleUrl: './content-modifica.component.css'
})
export class ContentModificaComponent {
  constructor(
    private route: ActivatedRoute,
    public switchService: SwitchService
  ) {}
  currentForm: string = 'box';

  box:BoxModel=this.switchService.box[0]
  vlan:VlanModel=this.switchService.vlan[0]
  port:porteSwitchModel=this.switchService.porte[0]
  switch:SwitchModel=this.switchService.switch[0]

  boxBackup:BoxModel=new BoxModel(this.box.name,this.box.desc)
  vlanBackup:VlanModel=new VlanModel(this.vlan.name,this.vlan.color,this.vlan.number)
  portBackup?:porteSwitchModel
  switchBackup?:SwitchModel

  nPort: number = this.switch.ports.length;
  ports: PortModel[] = this.switch.ports;
  selectedPort: PortModel = this.switch.ports[0]

  portChange(n: number) {
    this.nPort = n;
    this.generaPorte();
  }
  selectPort(i: any) {
    this.selectedPort = this.ports[i];
  }

  ngOnInit() {
    console.log(this.route.params)
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      for (let element in params) {
        this.currentForm = params[element];
      }
      console.log(this.currentForm)
    });

    
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

  eliminaBox(){
    this.switchService.box.splice(this.switchService.box.indexOf(this.box),1)
    this.box=this.switchService.box[0]
    this.switchService.salvaDati()
  }
  eliminaVlan(){
    this.switchService.vlan.splice(this.switchService.vlan.indexOf(this.vlan),1)
    this.vlan=this.switchService.vlan[0]
    this.switchService.salvaDati()
  }
  eliminaPorta(){
    this.switchService.porte.splice(this.switchService.porte.indexOf(this.port),1)
    this.port=this.switchService.porte[0]
    this.switchService.salvaDati()
  }
  eliminaSwitch(){
    this.switchService.switch.splice(this.switchService.switch.indexOf(this.switch),1)
    this.switch=this.switchService.switch[0]
    this.switchService.salvaDati()
  }

  
}
