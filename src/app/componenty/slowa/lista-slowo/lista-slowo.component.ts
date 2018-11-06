import { Component, OnInit } from '@angular/core';
import { Slowo } from '../slowo.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { SlowaService } from '../slowa.service';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-lista-slowo',
  templateUrl: './lista-slowo.component.html',
  styleUrls: ['./lista-slowo.component.css']
})
export class ListaSlowoComponent implements OnInit {

  public url:string[] = window.location.href.split('/');
  slowo: Slowo[];
  autor: string;
  values: string = '';

  onKey(event: any) {
    this.values = event.target.value;
  }

  constructor(private db: AngularFirestore, public slowoService: SlowaService, public as: AuthService) {
    this.slowoService.getSlowo(this.url[4], this.url[5]).subscribe(data => {
      this.slowo = data.sort((s: Slowo, b: Slowo) => {
        return +new Date(b.data_dodania) - +new Date(s.data_dodania);
      });
    });
   };

  ngOnInit() {
  }

}
