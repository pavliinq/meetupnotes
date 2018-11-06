import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Pytanie } from './pytanie.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../serwisy/auth.service';


@Injectable()
export class PytaniaService {

  autor: string;
  pytanieDocument: AngularFirestoreDocument<Pytanie>;
  pytanieCollection: AngularFirestoreCollection<Pytanie[]>;
  pytanie: Observable<Pytanie[]>

  constructor(private db: AngularFirestore, public as: AuthService) {

   }

   getPytanie(url:string, url1:string) {
     this.pytanieCollection = this.db.collection<Pytanie[]>('/grupa/'+url+'/pokoje/'+url1+'/pytania/');
     this.pytanie = this.pytanieCollection.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Pytanie;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
   });
   return this.pytanie;
  }

  deletePytanie(idDokumentu, url, url1) {
    this.pytanieDocument = this.db.doc('/grupa/'+url+'/pokoje/'+url1+'/pytania/' + idDokumentu);
    this.pytanieDocument.delete();
  }

  updatePytanie(pytanie: Pytanie, idDokumentu, url, url1) {
    this.pytanieDocument = this.db.doc('/grupa/'+url+'/pokoje/'+url1+'/pytania/' + idDokumentu);
    this.pytanieDocument.update(pytanie);
  }

  setPytanie(turn: Pytanie, url, url1) {
    this.getPytanie(url, url1);
    this.pytanieCollection.add(JSON.parse(JSON.stringify(turn)));
  }

}
