import { Component } from '@angular/core';
import { PortModel } from '../../models/port-model';
import { VlanModel } from '../../models/vlan-model';
import { SwitchService } from '../../services/switch.service';
import { BoxModel } from '../../models/box-model';

@Component({
  selector: 'app-content-visualizza',
  templateUrl: './content-visualizza.component.html',
  styleUrl: './content-visualizza.component.css'
})
export class ContentVisualizzaComponent {

  constructor(
    public switchService: SwitchService
  ) {}

  selectedBox:BoxModel[]=[]

  ngOnInit(){
    console.log(this.switchService.switch)
  }

  modificaBox(e:any){
    if(this.selectedBox.includes(e)){
      let i=this.selectedBox.indexOf(e)
      this.selectedBox.splice(i,1)
    }else{
      this.selectedBox.push(e)
    }

    console.log(this.selectedBox)
  }
}
