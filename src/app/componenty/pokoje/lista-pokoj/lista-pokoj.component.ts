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
  pokoje: Pokoj[];
  isLogin: boolean;
  values:string ='';
  //values: string[] = [];

  uczestnicy: string[];
  uczestnik: string;
  userid: string;
  modo:boolean;

  onKey(event: any) { 
    this.values = event.target.value ;
  }

  constructor(private db: AngularFirestore, public pokojService: PokojService, public authService: AuthService) {
    this.pokojService.getPokoj(this.url[4]).subscribe(data => { this.pokoje = data; });

}

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userid = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
    this.uczestnik = this.userid;
  }

  onKeydown(egg) {
      
    this.modo=true
  }

}
