import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Pokoj } from './pokoj.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../serwisy/auth.service';
import { JsonPipe } from '@angular/common';

@Injectable()
export class PokojService {

  pokojDocument: AngularFirestoreDocument<Pokoj>
  pokojCollection: AngularFirestoreCollection<Pokoj[]>
  pokoj: Observable<Pokoj[]>;

  constructor(public db: AngularFirestore, public as: AuthService) { }

  getPokoj(url) {
    this.pokojCollection = this.db.collection<Pokoj[]>('/grupa/'+url+'/pokoje/');
    this.pokoj = this.pokojCollection.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Pokoj;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.pokoj;
  }

  DeletaPokoj(idDokumentu, url) {
    this.pokojDocument = this.db.doc('/grupa/'+url+'/pokoje/' + idDokumentu);
    this.pokojDocument.delete();
  }

  updatePokoj(pokoj: Pokoj, idDokumentu, url) {
    this.pokojDocument = this.db.doc('/grupa/'+url+'/pokoje/' + idDokumentu);
    this.pokojDocument.update(pokoj);
  }

  setPokoj(turn: Pokoj, url: string) {
    this.getPokoj(url);
    this.pokojCollection.add(JSON.parse(JSON.stringify(turn)));
  } 

}
