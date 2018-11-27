import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Pytanie_prowadzący } from './pytanie-prowadzacy.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PytaniaProwadzacyService {

  autor: string;
  pytanieProwadzacyDocument: AngularFirestoreDocument<Pytanie_prowadzący>;
  pytanieProwadzacyCollection: AngularFirestoreCollection<Pytanie_prowadzący[]>;
  pytanieProwadzacy: Observable<Pytanie_prowadzący[]>

  constructor() { }

}