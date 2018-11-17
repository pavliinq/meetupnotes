import { Component, OnInit, Input } from '@angular/core';
import { Pokoj } from '../pokoj.model';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Grupa } from '../../grupy/grupa.model';
import { GrupaService } from '../../grupy/grupa.service';
import { PokojService } from '../pokoj.service';
import { AuthService } from '../../../serwisy/auth.service';



@Component({
  selector: 'app-pokoj-widok',
  templateUrl: './pokoj-widok.component.html',
  styleUrls: ['./pokoj-widok.component.css']
})
export class PokojWidokComponent implements OnInit {

  pokojDocument: AngularFirestoreDocument<Pokoj>
  url: string[] = window.location.href.split('/');
  grupa: Grupa;
  pokoj: Pokoj;
  idGrupa: string = this.url[4];
  idPokoj: string = this.url[5];
  autorPokoj: boolean;
  user: string;
  isLogin: boolean;

  constructor(public as: AuthService, public db: AngularFirestore, public grupaService: GrupaService, public pokojService: PokojService) {
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.user = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
    this.grupaService.getGrupa().subscribe( data => {
      this.grupa = data.filter(g => g.id == this.idGrupa)[0];
    })
    this.pokojService.getPokoj(this.idGrupa).subscribe( data => {
      this.pokoj = data.filter(p => p.id == this.idPokoj)[0];
      this.czyAutorPokoj();
    })
   }

   czyAutorPokoj() {
    this.autorPokoj = this.user == this.pokoj.autor;
   }

  ngOnInit() {
  }

  DeletePokoj(idDokumentu, url) {
    this.pokojDocument = this.db.doc('/grupa/'+url+'/pokoje/' + idDokumentu);
    this.pokojDocument.delete();
  }
}
