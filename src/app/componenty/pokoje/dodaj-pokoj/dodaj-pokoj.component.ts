import { Component, OnInit, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Pokoj } from '../pokoj.model';
import { PokojService } from '../pokoj.service';
import { AuthService } from '../../../serwisy/auth.service';
import { GrupaService } from '../../grupy/grupa.service';
import { Grupa } from '../../grupy/grupa.model';

@Component({
  selector: 'app-dodaj-pokoj',
  templateUrl: './dodaj-pokoj.component.html',
  styleUrls: ['./dodaj-pokoj.component.css']
})
export class DodajPokojComponent implements OnInit {

  public values = '';
  onKey(event: any) { 
    this.values = event.target.value ;
  }

  public isLogin: boolean;
  public iduser: string;
  public grupa: Grupa;
  // public url: string[] = window.location.href.split('/')
  public adres = window.location.href;
  url1 = this.adres.replace('/dodaj-pokoj','');
  url = this.url1.split('/');
  

  constructor(public authService: AuthService, private db: AngularFirestore,public grupaService: GrupaService, public pokojService: PokojService, private router: Router) { 
    this.grupaService.getGrupa().subscribe(data => { this.grupa=data.filter(k => k.id==this.url[4])[0]; });
    this.authService.getAuth().subscribe( auth => {
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

  dodajPokoj(f: NgForm) {
    let pokoj: Pokoj = new Pokoj();
    pokoj.nazwa = f.value.nazwaPokoj;
    pokoj.haslo = f.value.hasloPokoj;
    pokoj.data_utworzenia = new Date();
    pokoj.autor = this.iduser;

    this.pokojService.setPokoj(pokoj,this.url[4]);
    f.resetForm();
  }

}
