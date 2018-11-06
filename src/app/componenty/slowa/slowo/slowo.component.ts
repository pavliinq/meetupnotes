import { Component, OnInit, Input } from '@angular/core';
import { Slowo } from '../slowo.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../../../serwisy/auth.service';
import { SlowaService } from '../slowa.service';

@Component({
  selector: 'app-slowo',
  templateUrl: './slowo.component.html',
  styleUrls: ['./slowo.component.css']
})
export class SlowoComponent implements OnInit {

  public isLogin: boolean;
  url:string[] = window.location.href.split('/');
  @Input('slowo') slowo: Slowo;
  
  constructor(private db: AngularFirestore, public as: AuthService, public slowoService: SlowaService) { 
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