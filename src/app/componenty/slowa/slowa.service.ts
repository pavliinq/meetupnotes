import { Injectable } from '@angular/core';
import { Slowo } from './slowo.model';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../serwisy/auth.service';

@Injectable()
export class SlowaService {

  autor: string;
  slowoDocument: AngularFirestoreDocument<Slowo>;
  slowoCollection: AngularFirestoreCollection<Slowo[]>;
  slowo: Observable<Slowo[]>;

  constructor(public db: AngularFirestore, public as: AuthService) { }

  getSlowo(url:string, url1:string) {
    this.slowoCollection = this.db.collection<Slowo[]>('/grupa/'+url+'/pokoje/'+url1+'/slowa/');
    this.slowo = this.slowoCollection.snapshotChanges().map(actions => {
      return actions.map( a => {
        const data = a.payload.doc.data() as Slowo;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.slowo;
  }

  DeletePokoj(idDokumentu, url, url1) {
    this.slowoDocument = this.db.doc('/grupa/'+url+'/pokoje/'+url1+'/slowa/' + idDokumentu);
    this.slowoDocument.delete();
  }

  updateSlowo(slowo: Slowo, idDokumentu, url, url1) {
    this.slowoDocument = this.db.doc('/grupa/'+url+'/pokoje/'+url1+'/slowa/' + idDokumentu);
    this.slowoDocument.update(slowo);
  }

  setSlowo(turn: Slowo, url, url1) {
    this.getSlowo(url, url1);
    this.slowoCollection.add(JSON.parse(JSON.stringify(turn)));
  }

}
