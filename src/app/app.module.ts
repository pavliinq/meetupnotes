import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { LogowanieComponent } from './componenty/logowanie/logowanie.component';
import { HomeComponent } from './componenty/home/home.component';
import { NavbarComponent } from './componenty/navbar/navbar.component';
import { RejestracjaComponent } from './componenty/rejestracja/rejestracja.component';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from './serwisy/auth.service';
import { AuthGuard } from './guard/auth.guard';

import { GrupaService } from './componenty/grupy/grupa.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeUserComponent } from './componenty/home-user/home-user.component';
import { DodajGrupaComponent } from './componenty/grupy/dodaj-grupa/dodaj-grupa.component';
import { GrupaComponent } from './componenty/grupy/grupa/grupa.component';
import { ListaGrupaComponent } from './componenty/grupy/lista-grupa/lista-grupa.component';
import { GrupyComponent } from './componenty/grupy/grupy/grupy.component';
import { WidokGrupaComponent } from './componenty/grupy/widok-grupa/widok-grupa.component';
import { PokojComponent } from './componenty/pokoje/pokoj/pokoj.component';
import { DodajPokojComponent } from './componenty/pokoje/dodaj-pokoj/dodaj-pokoj.component';
import { ListaPokojComponent } from './componenty/pokoje/lista-pokoj/lista-pokoj.component';
import { ZapiszComponent } from './componenty/pokoje/zapisz/zapisz.component';
import { PokojService } from './componenty/pokoje/pokoj.service';
import { PokojWidokComponent } from './componenty/pokoje/pokoj-widok/pokoj-widok.component';
import { DodajSlowoComponent } from './componenty/slowa/dodaj-slowo/dodaj-slowo.component';
import { ListaSlowoComponent } from './componenty/slowa/lista-slowo/lista-slowo.component';
import { SlowoComponent } from './componenty/slowa/slowo/slowo.component';
import { SlowaService } from './componenty/slowa/slowa.service';
import { PytaniaService } from './componenty/pytania/pytania.service';
import { PytanieComponent } from './componenty/pytania/pytanie/pytanie.component';
import { DodajPytanieComponent } from './componenty/pytania/dodaj-pytanie/dodaj-pytanie.component';
import { ListaPytanieComponent } from './componenty/pytania/lista-pytanie/lista-pytanie.component';
import { FooterComponent } from './componenty/footer/footer.component';
import { MojaListaGrupaComponent } from './componenty/grupy/moja-lista-grupa/moja-lista-grupa.component';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent,
    HomeComponent,
    NavbarComponent,
    RejestracjaComponent,
    HomeUserComponent,
    DodajGrupaComponent,
    GrupaComponent,
    ListaGrupaComponent,
    GrupyComponent,
    WidokGrupaComponent,
    PokojComponent,
    DodajPokojComponent,
    ListaPokojComponent,
    ZapiszComponent,
    PokojWidokComponent,
    DodajSlowoComponent,
    ListaSlowoComponent,
    SlowoComponent,
    PytanieComponent,
    DodajPytanieComponent,
    ListaPytanieComponent,
    FooterComponent,
    MojaListaGrupaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FlashMessagesModule,
    AngularFontAwesomeModule,
  ],
  providers: [AuthService, 
    AuthGuard, 
    FlashMessagesService, 
    GrupaService, PokojService, SlowaService, PytaniaService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
