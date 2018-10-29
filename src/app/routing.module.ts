import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogowanieComponent } from './componenty/logowanie/logowanie.component';
import { HomeComponent } from './componenty/home/home.component';
import { RejestracjaComponent } from './componenty/rejestracja/rejestracja.component';
import { NotFoundPageComponent } from './componenty/not-found-page/not-found-page.component';
import { HomeUserComponent } from './componenty/home-user/home-user.component';

import {AuthGuard} from './guard/auth.guard';
import { DodajGrupaComponent } from './componenty/grupy/dodaj-grupa/dodaj-grupa.component';

const routes: Routes = [
  {path: 'logowanie', component: LogowanieComponent},
  {path: '', component: HomeComponent},
  {path: 'rejestracja', component: RejestracjaComponent},
  {path: 'not-found', component: NotFoundPageComponent},
  {path: 'home-user', component: HomeUserComponent},
  {path: 'dodaj-grupe', component: DodajGrupaComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { };