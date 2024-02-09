import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  visInserisci:boolean=true;
  visModifica:boolean=false;
  visVisualizza:boolean=false;

  onNavigate(feature:string){
    switch(feature){
      case "inserisci":
        this.visInserisci=true;
        this.visModifica=false;
        this.visVisualizza=false;
        
        break;
        case "modifica":
          this.visInserisci=false;
        this.visModifica=true;
        this.visVisualizza=false;
        break;
        case "visualizza":
          this.visInserisci=false;
        this.visModifica=false;
        this.visVisualizza=true;
        break;
    }
  }

}
