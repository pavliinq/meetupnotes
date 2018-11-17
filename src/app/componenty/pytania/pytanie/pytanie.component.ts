import { Component, OnInit, Input } from '@angular/core';
import { Pytanie } from '../pytanie.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../serwisy/auth.service';
import { PytaniaService } from '../pytania.service';
import { Pokoj } from '../../pokoje/pokoj.model';
import { PokojService } from '../../pokoje/pokoj.service';

@Component({
  selector: 'app-pytanie',
  templateUrl: './pytanie.component.html',
  styleUrls: ['./pytanie.component.css']
})
export class PytanieComponent implements OnInit {

  public isLogin: boolean;
  url:string[] = window.location.href.split('/');
  @Input('pytanie') pytanie: Pytanie;
  pokoj: Pokoj;
  user: string;
  autorPytanie: boolean;
  autorPokoj: boolean;

  numberOfLikes: number;

  constructor(public pokojService: PokojService, private db: AngularFirestore, public as: AuthService, public PytanieService: PytaniaService) {
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.user = auth.uid;
        this.autorPytanie = this.user == this.pytanie.autor;
      } else {
        this.isLogin = false;
      }
    }
  ); 
  this.pokojService.getPokoj(this.url[4]).subscribe( data => {
    this.pokoj = data.filter(p => p.id == this.url[5])[0];
    this.czyAutorPokoj();
  });
   }

  ngOnInit() {
  }

  czyAutorPokoj() {
    this.autorPokoj = this.user == this.pokoj.autor;
  }

  deletePytanie() {
    this.PytanieService.deletePytanie(this.pytanie.id, this.url[4], this.url[5])
  }

  giveLike() {
    if (this.pytanie.likes.indexOf(this.user) == -1) {
      this.pytanie.likes.push(this.user);
      this.pytanie.sumaLikes =+ 1;
    } else {
      this.pytanie.sumaLikes =- 1;
    }
    this.PytanieService.updatePytanie(this.pytanie, this.pytanie.id, this.url[4], this.url[5]);
  }

  numberLikes() {
    this.numberOfLikes = this.pytanie.likes.length;
  }

}
