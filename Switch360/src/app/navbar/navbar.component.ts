import { Component } from '@angular/core';
import { SwitchService } from '../services/switch.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2'


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
     this.switchService.carica(JSON.parse(fileReader.result))
    }
    fileReader.onerror = (error:any) => {
      console.log(error);
    }

    

  }
cancellaDati(){
  Swal.fire({
    title: "Sei sicuro di voler proseguire?",
    text:"Cancellando i tuoi dati salvati in locale non sarà più possibile visualizzare le relative informazioni."+
    "\nSe hai salvato questi dati in un file potrai ricaricarli premendo sul pulsante 'Carica' in alto a destra",
    showConfirmButton:true,
    showCancelButton: true,
    confirmButtonText: "Conferma",
    cancelButtonText: `Annulla`
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      this.switchService.cancellaDati();
      Swal.fire("Cancellamento dati effettuato", "I tuoi dati sono stati cancellati", "success");
    } 
  });
}
}
