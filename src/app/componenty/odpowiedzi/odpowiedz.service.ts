import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Odpowiedz } from './odpowiedz/odpowiedz.model';
import { Observable } from 'rxjs/Observable';
import { JsonPipe } from '@angular/common';


@Injectable()
export class OdpowiedzService {

  odpowiedzDocument: AngularFirestoreDocument<Odpowiedz>;
  odpowiedzCollection: AngularFirestoreCollection<Odpowiedz[]>;
  odpowiedz: Observable<Odpowiedz[]>;

  constructor(public db: AngularFirestore) { }

  getOdpowiedz(url1: string, url2: string, url3: string) {
    this.odpowiedzCollection = this.db.collection<Odpowiedz[]>('/grupa/'+url1+'/pokoje/'+url2+'/pytania/'+url3+'/odpowiedzi/');
    this.odpowiedz = this.odpowiedzCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Odpowiedz;
        const id = a.payload.doc.id;
        return { id, ...data };
      })
    });
    return this.odpowiedz;
  }


  updateOdpowiedz(odp: Odpowiedz, idDokumentu, url1: string, url2: string, url3: string) {
    this.odpowiedzDocument = this.db.doc('/grupa/'+url1+'/pokoje/'+url2+'/pytania/'+url3+'/odpowiedzi/' + idDokumentu);
    this.odpowiedzDocument.update(odp);
  }

  setOdpowiedz(odp: Odpowiedz, url1, url2, url3) {
    this.getOdpowiedz(url1,url2,url3);
    this.odpowiedzCollection.add(JSON.parse(JSON.stringify(odp)));
  }

  deleteOdpowiedz(idDokumentu, url1, url2, url3) {
    this.odpowiedzDocument = this.db.doc('/grupa/'+url1+'/pokoje/'+url2+'/pytania/'+url3+'/odpowiedzi/' + idDokumentu);
    this.odpowiedzDocument.delete();
  }

}

