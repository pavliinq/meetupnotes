import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { PokojService } from '../pokoj.service';
import { Pokoj } from '../pokoj.model';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-pokoj',
  templateUrl: './pokoj.component.html',
  styleUrls: ['./pokoj.component.css']
})
export class PokojComponent implements OnInit {

  public isLogin: boolean;
  public userid: string;
  public zapisany_test: number;

  url:string[] = window.location.href.split('/');

  @Input('pokoj') pokoj: Pokoj;
  @Input('user') user: string;

  constructor(private db: AngularFirestore, public pokojService: PokojService, private authService: AuthService) {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userid = auth.uid;
      } else {
        this.isLogin = false;
      }
    }
  );
   }

  ngOnInit() {

    this.czyzapisany();
  }

  czyzapisany() {
    this.zapisany_test = 0;
    for (let zapisany of this.pokoj.zapisani) {
      if (zapisany == this.userid) {
        this.zapisany_test = ++this.zapisany_test;
      }
    }
  }

}
