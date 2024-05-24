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
    console.log(this.route.params)
    this.route.params.subscribe((params: Params) => {
      console.log(params)
      for (let element in params) {
        this.currentForm = params[element];
      }
      console.log(this.currentForm)
    });

    
  }
  
}
