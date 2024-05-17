import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserisciComponent } from './main/inserisci/inserisci.component';
import { ModificaComponent } from './main/modifica/modifica.component';
import { VisualizzaComponent } from './main/visualizza/visualizza.component';
import { AppComponent } from './app.component';
import { ContentsComponent } from './main/contents-inserisci/contents.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/inserisci/box',
  pathMatch: 'full'
},
{
  path: 'inserisci', // senza slash !
  component: InserisciComponent,
  children: [
    { path: ':box', component: ContentsComponent },
    { path: ':vlan', component: ContentsComponent },
    { path: ':porte', component: ContentsComponent },
    { path: ':switch', component: ContentsComponent },

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
export class AppRoutingModule { 


}
