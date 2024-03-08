import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css'
})
export class ButtonsComponent {
  constructor(private router: Router,private route:ActivatedRoute) {}
  currentButton!:string

  ngOnInit(){
    console.log();
    this.currentButton=window.location.href.split('/')[3]
  }

  changeColor(select:string){
    this.currentButton=select
  }
  
}
