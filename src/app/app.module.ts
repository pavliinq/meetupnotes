import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';
import { LogowanieComponent } from './componenty/logowanie/logowanie.component';
import { HomeComponent } from './componenty/home/home.component';
import { NavbarComponent } from './componenty/navbar/navbar.component';
import { RejestracjaComponent } from './componenty/rejestracja/rejestracja.component';
import { NotFoundPageComponent } from './componenty/not-found-page/not-found-page.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from './serwisy/auth.service';
import { AuthGuard } from './guard/auth.guard';

import { GrupaService } from './componenty/grupy/grupa.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeUserComponent } from './componenty/home-user/home-user.component';
import { DodajGrupaComponent } from './componenty/grupy/dodaj-grupa/dodaj-grupa.component';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent,
    HomeComponent,
    NavbarComponent,
    RejestracjaComponent,
    NotFoundPageComponent,
    HomeUserComponent,
    DodajGrupaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FlashMessagesModule,
    AngularFontAwesomeModule
  ],
  providers: [AuthService, 
    AuthGuard, 
    FlashMessagesService, 
    GrupaService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
