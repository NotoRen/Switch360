import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SwitchService } from '../../services/switch.service';

@Component({
  selector: 'app-content-modifica',
  templateUrl: './content-modifica.component.html',
  styleUrl: './content-modifica.component.css'
})
export class ContentModificaComponent {
  constructor(
    private route: ActivatedRoute,
    public switchService: SwitchService
  ) {}
  currentForm: string = 'box';
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      for (let element in params) {
        this.currentForm = params[element];
      }
    });

    //this.generaPorte();
    //console.log(this.ports)
  }
  
}
