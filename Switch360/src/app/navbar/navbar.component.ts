import { Component } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public switchService:SwitchService){}
}
