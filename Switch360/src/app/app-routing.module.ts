import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserisciComponent } from './main/inserisci/inserisci.component';
import { ModificaComponent } from './main/modifica/modifica.component';
import { VisualizzaComponent } from './main/visualizza/visualizza.component';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/inserisci',
  pathMatch: 'full'
},
{
  path: 'inserisci', // senza slash !
  component: InserisciComponent,
  children: [
    { path: 'box', component: InserisciComponent },

    ]
},{
  path: 'modifica', // senza slash !
  component: ModificaComponent,
  children: [
    { path: 'box', component: ModificaComponent },

    ]
},{
  path: 'visualizza', // senza slash !
  component: VisualizzaComponent,
  children: [
    { path: 'box', component: VisualizzaComponent },

    ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
