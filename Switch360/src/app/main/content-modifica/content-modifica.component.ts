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

  
}
