import { Component, OnInit, Input } from '@angular/core';
import { OdpowiedzService } from '../odpowiedz.service';
import { AuthService } from '../../../serwisy/auth.service';
import { Odpowiedz } from './odpowiedz.model';
import { Pytanie } from '../../pytania/pytanie.model';
import { PytaniaService } from '../../pytania/pytania.service';

@Component({
  selector: 'app-odpowiedz',
  templateUrl: './odpowiedz.component.html',
  styleUrls: ['./odpowiedz.component.css']
})
export class OdpowiedzComponent implements OnInit {

  public isLogin: boolean;
  public user: string;
  public autorOdpowiedz: boolean;
  @Input('odpowiedz') odpowiedz: Odpowiedz;
  public isAdmin: boolean;
  url:string[] = window.location.href.split('/');
  pytanie: Pytanie;

  constructor(public odpService: OdpowiedzService, public as: AuthService, public pytanieService: PytaniaService) { 
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.user = auth.uid;
        this.autorOdpowiedz = this.user == this.odpowiedz.autor;
        this.isAdmin = auth.uid == 'Fohqwou3qSNWS11t6hq3VL5TgVG2';

      } else {
        this.isLogin = false;
      }
    }
  );

  this.pytanieService.getPytanie(this.url[4], this.url[5]).subscribe( data => {
    this.pytanie = data.filter(p => p.id == this.url[6])[0];
    this.czyAutorOdpowiedz();
  });
  // this.odpService.getOdpowiedz(this.url[4], this.url[5], this.url[6]).subscribe( data => {
  //   this.odpowiedz = data.filter( o => o.id == this.url[6])[0];
  //   this.czyAutorOdpowiedz();
  // })
  }

  czyAutorOdpowiedz() {
    this.autorOdpowiedz = this.user == this.odpowiedz.autor;
  }

  deleteOdpowiedz() {
    this.odpService.deleteOdpowiedz(this.odpowiedz.id, this.url[4], this.url[5], this.url[6]);
  }

  ngOnInit() {
  }

}
