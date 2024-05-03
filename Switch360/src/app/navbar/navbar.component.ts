import { Component } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  selectedFile:any

  constructor(public switchService:SwitchService,public http:HttpClient){}
  
  selezionaFile(){
    let file=this.selectedFile;
    console.log(file)


    this.http.get(file).subscribe(res => {
      console.log(res);
    });
    this.switchService.carica(file)

  }
}
