import { Component, OnInit, Input } from '@angular/core';
import { Pytanie } from '../pytanie.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../serwisy/auth.service';
import { PytaniaService } from '../pytania.service';

@Component({
  selector: 'app-pytanie',
  templateUrl: './pytanie.component.html',
  styleUrls: ['./pytanie.component.css']
})
export class PytanieComponent implements OnInit {

  public isLogin: boolean;
  url:string[] = window.location.href.split('/');
  @Input('pytanie') pytanie: Pytanie;

  constructor(private db: AngularFirestore, public as: AuthService, public PytanieService: PytaniaService) {
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    }
  ); 
   }

  ngOnInit() {
  }

}
