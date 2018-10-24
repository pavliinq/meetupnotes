import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogowanieComponent } from './componenty/logowanie/logowanie.component';
import { HomeComponent } from './componenty/home/home.component';
import { RejestracjaComponent } from './componenty/rejestracja/rejestracja.component';
import { NotFoundPageComponent } from './componenty/not-found-page/not-found-page.component';

import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: 'logowanie', component: LogowanieComponent},
  {path: '', component: HomeComponent},
  {path: 'rejestracja', component: RejestracjaComponent},
  {path: 'not-found', component: NotFoundPageComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { };