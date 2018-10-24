import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';


import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {environment} from '../environments/environment';
import { LogowanieComponent } from './componenty/logowanie/logowanie.component';
import { HomeComponent } from './componenty/home/home.component';
import { NavbarComponent } from './componenty/navbar/navbar.component';
import { RejestracjaComponent } from './componenty/rejestracja/rejestracja.component';
import { NotFoundPageComponent } from './componenty/not-found-page/not-found-page.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import { AuthService } from './serwisy/auth.service';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent,
    HomeComponent,
    NavbarComponent,
    RejestracjaComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
