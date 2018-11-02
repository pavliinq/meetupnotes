import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { PokojService } from '../pokoj.service';
import { Pokoj } from '../pokoj.model';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-lista-pokoj',
  templateUrl: './lista-pokoj.component.html',
  styleUrls: ['./lista-pokoj.component.css']
})
export class ListaPokojComponent implements OnInit {
  public url:string[] = window.location.href.split('/');
  pokoj: Pokoj[];
  autor: string;
  values: string = '';
  onKey(event: any) { 
    this.values = event.target.value ;
  }

  constructor(private db: AngularFirestore, public pokojService: PokojService, public authService: AuthService) {
    this.pokojService.getPokoj(this.url[4]).subscribe(data => { 
      this.pokoj = data.sort((a: Pokoj, b: Pokoj) => {
        return +new Date(b.data_utworzenia) - +new Date(a.data_utworzenia);
       }
      );
   });
  };

  ngOnInit() {
  }

}
