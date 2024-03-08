import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css'
})
export class ContentsComponent {
  constructor(private router: Router,private route:ActivatedRoute) {}

  currentForm:string="box"

  ngOnInit(){
    this.route.params.subscribe((params:Params)=>{
      for(let element in params){
          this.currentForm=params[element]
        }
    })
  }
}
