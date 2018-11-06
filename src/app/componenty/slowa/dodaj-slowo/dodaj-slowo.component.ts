import { Component, OnInit } from '@angular/core';
import { Pokoj } from '../../pokoje/pokoj.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { SlowaService } from '../slowa.service';
import { PokojService } from '../../pokoje/pokoj.service';
import { AuthService } from '../../../serwisy/auth.service';
import { NgForm } from '@angular/forms';
import { Slowo } from '../slowo.model';

@Component({
  selector: 'app-dodaj-slowo',
  templateUrl: './dodaj-slowo.component.html',
  styleUrls: ['./dodaj-slowo.component.css']
})
export class DodajSlowoComponent implements OnInit {

  public values = '';
  // public url:string[] = window.location.href.split('/');
  public adres = window.location.href;
  url1 = this.adres.replace('/dodaj-slowo','');
  url = this.url1.split('/');

  // url: string[] = window.location.href.split('/');
  // strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  pokoj: Pokoj;
  onKey(event: any) { 
    this.values = event.target.value ;
  }

  public isLogin: boolean;
  public iduser: string;

  constructor(private db: AngularFirestore, public slowoService: SlowaService, public pokojService: PokojService, public as: AuthService) {
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

  dodajSlowo(f: NgForm) {
    let slowo: Slowo = new Slowo();
    slowo.autor = this.iduser;
    slowo.data_dodania = new Date();
    slowo.likes = [];
    slowo.slowo = f.value.slowo;

    this.slowoService.setSlowo(slowo,this.url[4], this.url[5]);
    f.resetForm();


  }

}
