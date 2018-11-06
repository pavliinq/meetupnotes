import { Component, OnInit } from '@angular/core';
import { Pokoj } from '../../pokoje/pokoj.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { PokojService } from '../../pokoje/pokoj.service';
import { AuthService } from '../../../serwisy/auth.service';
import { NgForm } from '@angular/forms';
import { Pytanie } from '../pytanie.model';
import { PytaniaService } from '../pytania.service';

@Component({
  selector: 'app-dodaj-pytanie',
  templateUrl: './dodaj-pytanie.component.html',
  styleUrls: ['./dodaj-pytanie.component.css']
})
export class DodajPytanieComponent implements OnInit {


  public values = '';  public adres = window.location.href;
  url1 = this.adres.replace('/dodaj-pytanie','');
  url = this.url1.split('/');

  pokoj: Pokoj;
  onKey(event: any) { 
    this.values = event.target.value ;
  }

  public isLogin: boolean;
  public iduser: string;

  constructor(private db: AngularFirestore, public as: AuthService, public PytaniaService: PytaniaService, public pokojService: PokojService) {
    this.pokojService.getPokoj(this.url[4]).subscribe(data => { this.pokoj = data.filter ( p => p.id == this.url[5])[0];});
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.iduser = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
   }

  ngOnInit() {
  }

  dodajPytanie(f: NgForm) {
    let pytanie: Pytanie = new Pytanie();
    pytanie.autor = this.iduser;
    pytanie.data_dodania = new Date();
    pytanie.likes = [];
    pytanie.pytanie = f.value.pytanie;

    this.PytaniaService.setPytanie(pytanie, this.url[4], this.url[5]);
    f.resetForm();
  }

}
