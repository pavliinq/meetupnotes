import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogowanieComponent } from './componenty/logowanie/logowanie.component';
import { HomeComponent } from './componenty/home/home.component';
import { RejestracjaComponent } from './componenty/rejestracja/rejestracja.component';
import { NotFoundPageComponent } from './componenty/not-found-page/not-found-page.component';
import { HomeUserComponent } from './componenty/home-user/home-user.component';

import {AuthGuard} from './guard/auth.guard';
import { DodajGrupaComponent } from './componenty/grupy/dodaj-grupa/dodaj-grupa.component';
import { ListaGrupaComponent } from './componenty/grupy/lista-grupa/lista-grupa.component';
import { GrupyComponent } from './componenty/grupy/grupy/grupy.component'
import { WidokGrupaComponent } from './componenty/grupy/widok-grupa/widok-grupa.component';
import { DodajPokojComponent } from './componenty/pokoje/dodaj-pokoj/dodaj-pokoj.component';
import { PokojWidokComponent } from './componenty/pokoje/pokoj-widok/pokoj-widok.component';

const routes: Routes = [
  {path: 'logowanie', component: LogowanieComponent},
  {path: '', component: HomeComponent},
  {path: 'rejestracja', component: RejestracjaComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: 'home-user', component: HomeUserComponent, canActivate: [AuthGuard]},
  {path: 'dodaj-grupe', component: DodajGrupaComponent, canActivate: [AuthGuard]},
  {path: 'lista-grupa', component: ListaGrupaComponent, canActivate: [AuthGuard]},
  {path: 'grupy', component: GrupyComponent, canActivate: [AuthGuard]},
  {path: 'grupa/:grupa_id', component: WidokGrupaComponent, canActivate: [AuthGuard]},
  {path: 'grupa/:grupa_id/dodaj-pokoj', component: DodajPokojComponent, canActivate: [AuthGuard]},
  {path: 'grupa/:grupa_id/:pokoj_id', component: PokojWidokComponent, canActivate: [AuthGuard]},
  
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { };