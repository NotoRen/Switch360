import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { MainComponent } from './main/main.component';
import { InserisciComponent } from './main/inserisci/inserisci.component';
import { ModificaComponent } from './main/modifica/modifica.component';
import { VisualizzaComponent } from './main/visualizza/visualizza.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentsComponent } from './main/contents/contents.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    MainComponent,
    InserisciComponent,
    ModificaComponent,
    VisualizzaComponent,
    NavbarComponent,
    FooterComponent,
    ContentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
