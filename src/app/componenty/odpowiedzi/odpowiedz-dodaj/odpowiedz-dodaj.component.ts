import { Component, OnInit } from '@angular/core';
import { PytaniaService } from '../../pytania/pytania.service';
import { Pytanie } from '../../pytania/pytanie.model';
import { AuthService } from '../../../serwisy/auth.service';
import { NgForm } from '@angular/forms';
import { Odpowiedz } from '../odpowiedz/odpowiedz.model';
import { OdpowiedzService } from '../odpowiedz.service';

@Component({
  selector: 'app-odpowiedz-dodaj',
  templateUrl: './odpowiedz-dodaj.component.html',
  styleUrls: ['./odpowiedz-dodaj.component.css']
})
export class OdpowiedzDodajComponent implements OnInit {

  url: string[] = window.location.href.split('/');
  public pytanie: Pytanie;
  public isLogin: boolean;
  public iduser: string;

  constructor(public pytaniaService: PytaniaService, public as: AuthService, public odpService: OdpowiedzService) { 
    this.pytaniaService.getPytanie(this.url[4], this.url[5]).subscribe(data => {
      this.pytanie = data.filter(p => p.id == this.url[6])[0] });
      this.as.getAuth().subscribe( auth => {
        if (auth) {
          this.isLogin = true;
          this.iduser = auth.uid;
        } else {
          this.isLogin = false;
        }
      });
    };
  
  ngOnInit() {
  }

  dodajOdpowiedz(f: NgForm) {
    let odpowiedz: Odpowiedz = new Odpowiedz();
    odpowiedz.autor = this.iduser;
    odpowiedz.data_dodatnia = new Date();
    odpowiedz.odpowiedz = f.value.odpowiedz;

    this.odpService.setOdpowiedz(odpowiedz, this.url[4], this.url[5], this.url[6]);
    f.resetForm();
  }

}
