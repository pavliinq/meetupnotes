import { Component, OnInit } from '@angular/core';
import { Pytanie } from '../pytanie.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { PytaniaService } from '../pytania.service';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-lista-pytanie',
  templateUrl: './lista-pytanie.component.html',
  styleUrls: ['./lista-pytanie.component.css']
})
export class ListaPytanieComponent implements OnInit {

  public url:string[] = window.location.href.split('/');
  pytanie: Pytanie[];
  autor: string;
  values: string = '';
  modo: boolean;

  onKey(event: any) {
    this.values = event.target.value;
  }

  constructor(private db: AngularFirestore, public pytaniaService: PytaniaService, public as: AuthService) {
    this.pytaniaService.getPytanie(this.url[4], this.url[5]).subscribe(data => {
      this.pytanie = data.sort((a: Pytanie, b: Pytanie) => {
        return +new Date(b.data_dodania) - +new Date(a.data_dodania);
      });
    });
   }

  ngOnInit() {
  }

  onKeydown(egg) {
    this.modo=true;
  }

}
