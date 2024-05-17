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
  

   selezionaFile(event:any){
    this.selectedFile = event.target.files[0];
    const fileReader:any = new FileReader();
    fileReader.readAsText(this.selectedFile, "UTF-8");
    fileReader.onload = () => {
     console.log(JSON.parse(fileReader.result));
    }
    fileReader.onerror = (error:any) => {
      console.log(error);
    }
    //this.switchService.carica(file)

  }
}
