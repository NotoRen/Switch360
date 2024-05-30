import { Component } from '@angular/core';
import { PortModel } from '../../models/port-model';
import { VlanModel } from '../../models/vlan-model';
import { SwitchService } from '../../services/switch.service';
import { BoxModel } from '../../models/box-model';
import { SwitchModel } from '../../models/switch-model';

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

  compresso:BoxModel[]=[]

  compressoSwitch:SwitchModel[]=[]

  ngOnInit(){
    console.log(this.switchService.switch)
  }
  apriBox(e:any){
    if(this.compresso.includes(e)){
      let i=this.compresso.indexOf(e)
      this.compresso.splice(i,1)
    }else{
      this.compresso.push(e)
    }

  }

  apriSwitch(e:any){
    if(this.compressoSwitch.includes(e)){
      let i=this.compressoSwitch.indexOf(e)
      this.compressoSwitch.splice(i,1)
    }else{
      this.compressoSwitch.push(e)
    }

  }
  modificaBox(e:any){
    if(this.selectedBox.includes(e)){
      let i=this.selectedBox.indexOf(e)
      this.selectedBox.splice(i,1)
    }else{
      this.selectedBox.push(e)
    }

  }
}
