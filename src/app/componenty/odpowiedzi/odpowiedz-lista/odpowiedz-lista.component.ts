import { Component, OnInit } from '@angular/core';
import { OdpowiedzService } from '../odpowiedz.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Odpowiedz } from '../odpowiedz/odpowiedz.model';

@Component({
  selector: 'app-odpowiedz-lista',
  templateUrl: './odpowiedz-lista.component.html',
  styleUrls: ['./odpowiedz-lista.component.css']
})
export class OdpowiedzListaComponent implements OnInit {

  values: string = '';
  public url:string[] = window.location.href.split('/');
  odpowiedz: Odpowiedz[];
  modo: boolean;

  constructor(public odpService: OdpowiedzService, public db: AngularFirestore) { 
    this.odpService.getOdpowiedz(this.url[4], this.url[5], this.url[6]).subscribe( data => {
      this.odpowiedz = data.sort((a: Odpowiedz, b: Odpowiedz) => {
        return +new Date(b.data_dodatnia) - +new Date(a.data_dodatnia);
      })
    })
  }

  ngOnInit() {
  }

  
}
