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
import { ContentsComponent } from './main/contents-inserisci/contents.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { ContentVisualizzaComponent } from './main/content-visualizza/content-visualizza.component';
import { ContentModificaComponent } from './main/content-modifica/content-modifica.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    MainComponent,
    InserisciComponent,
    ModificaComponent,
    VisualizzaComponent,
    ContentVisualizzaComponent,
    ContentModificaComponent,
    NavbarComponent,
    FooterComponent,
    ContentsComponent,
    DropdownDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
