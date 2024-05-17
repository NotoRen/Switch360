import { Component } from '@angular/core';
import { PortModel } from '../../models/port-model';
import { VlanModel } from '../../models/vlan-model';
import { SwitchService } from '../../services/switch.service';

@Component({
  selector: 'app-content-visualizza',
  templateUrl: './content-visualizza.component.html',
  styleUrl: './content-visualizza.component.css'
})
export class ContentVisualizzaComponent {

  constructor(
    public switchService: SwitchService
  ) {}
}
