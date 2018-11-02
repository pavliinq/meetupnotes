import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Grupa } from '../grupa.model';
import { GrupaService } from '../grupa.service';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-dodaj-grupa',
  templateUrl: './dodaj-grupa.component.html',
  styleUrls: ['./dodaj-grupa.component.css']
})
export class DodajGrupaComponent implements OnInit {
  public isLogin: boolean;
  public iduser: string;
  constructor(public authService: AuthService, private db: AngularFirestore, public grupaServe: GrupaService, private router: Router) { 
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
  
  dodajGrupe(f: NgForm) {
    let grupa: Grupa = new Grupa();
    grupa.nazwa = f.value.nazwaGrupa ;
    grupa.data_utworzenia = new Date();
    grupa.prowadzacy= f.value.prowadzacy;
    grupa.miasto=f.value.miasto;
    grupa.opis = f.value.opis;
    grupa.autor = this.iduser;
   
    this.grupaServe.setGrupa(grupa);
    f.resetForm();
  }

}
