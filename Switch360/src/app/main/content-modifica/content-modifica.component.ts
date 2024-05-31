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

  box:BoxModel=new BoxModel(this.switchService.box[0].name, this.switchService.box[0].desc);
  vlan:VlanModel=new VlanModel(this.switchService.vlan[0].name,this.switchService.vlan[0].color,this.switchService.vlan[0].number);
  port:porteSwitchModel=new porteSwitchModel(this.switchService.porte[0].tipo,
    this.switchService.porte[0].velocita, this.switchService.porte[0].colore);
  switch:SwitchModel=new SwitchModel(this.switchService.switch[0].name,
    this.switchService.switch[0].ports,this.switchService.switch[0].box)


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
