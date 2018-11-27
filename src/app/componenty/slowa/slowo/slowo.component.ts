import { Component, OnInit, Input } from '@angular/core';
import { Slowo } from '../slowo.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../serwisy/auth.service';
import { SlowaService } from '../slowa.service';
import { Pokoj } from '../../pokoje/pokoj.model';
import { PokojService } from '../../pokoje/pokoj.service';

@Component({
  selector: 'app-slowo',
  templateUrl: './slowo.component.html',
  styleUrls: ['./slowo.component.css']
})
export class SlowoComponent implements OnInit {

  public isLogin: boolean;
  url:string[] = window.location.href.split('/');
  @Input('slowo') slowo: Slowo;
  pokoj: Pokoj;
  user: string;
  autorSlowa: boolean;
  autorPokoj: boolean;
  isAdmin: boolean;

  numberOfLikes: number;

  constructor(private db: AngularFirestore, public as: AuthService, public slowoService: SlowaService, public pokojService: PokojService) { 
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.user = auth.uid;
        this.autorSlowa = this.user == this.slowo.autor;
        this.isAdmin = auth.uid == 'Fohqwou3qSNWS11t6hq3VL5TgVG2';

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

  czyAutorPokoj() {
    this.autorPokoj = this.user == this.pokoj.autor;
  }

  deleteSlowo() {
    this.slowoService.DeleteSlowo(this.slowo.id, this.url[4], this.url[5])
  }

  giveLike() {
    if (this.slowo.likes.indexOf(this.user) == -1) {
      this.slowo.likes.push(this.user);
      this.slowo.sumaLikes =+ 1;
    } else {
      this.slowo.sumaLikes =- 1;
    }
    this.slowoService.updateSlowo(this.slowo, this.slowo.id, this.url[4], this.url[5]);
  }

  numberLikes() {
    this.numberOfLikes = this.slowo.likes.length;
  }

  ngOnInit() {
    this.numberLikes();
  }

}
