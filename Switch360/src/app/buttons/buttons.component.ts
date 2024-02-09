import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  @Output() featureSelected = new EventEmitter<string>()

  selected:string="inserisci"

  selectedClass:string="btn btn-primary ciccio"
  defaultClass:string="btn btn-outline-primary ciccio"

  onSelect(feature: string) {
    console.log(this.selected)
    this.selected=feature
    this.featureSelected.emit(this.selected);
  }
  
  
}
