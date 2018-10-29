import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Grupa } from './grupa.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GrupaService {

  grupaDocument: AngularFirestoreDocument<Grupa>;
  grupaCollection: AngularFirestoreCollection<Grupa[]>;
  grupa: Observable<Grupa[]>;

  constructor(public db: AngularFirestore) {
    this.grupaCollection = db.collection<Grupa[]>('/grupa');
  }

  getGrupa() {
    let grupaCollection = this.db.collection<Grupa[]>('/grupa');
    this.grupa = grupaCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Grupa;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.grupa;
  }

  DeleteGrupa(idDokumentu) {
    this.grupaDocument = this.db.doc('/grupa/' + idDokumentu);
    this.grupaDocument.delete();
  }

  updateGrupa(grupa: Grupa, idDokumentu) {
    this.grupaDocument = this.db.doc('/grupa/' + idDokumentu);
    this.grupaDocument.update(grupa);
  }

  setGrupa(turn: Grupa) {
    this.grupaCollection.add(JSON.parse(JSON.stringify(turn)));
  }

}
