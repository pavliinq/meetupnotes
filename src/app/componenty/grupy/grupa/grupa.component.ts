import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { GrupaService } from '../grupa.service';
import { Grupa } from '../grupa.model';
import { AuthService } from '../../../serwisy/auth.service';


@Component({
  selector: 'app-grupa',
  templateUrl: './grupa.component.html',
  styleUrls: ['./grupa.component.css']
})
export class GrupaComponent implements OnInit {

  public isLogin: boolean;
  url:string[] = window.location.href.split('/');
  @Input('grupa') grupa: Grupa;
  @Input('user') user: string;
  constructor(private db: AngularFirestore, public grupaServe: GrupaService, private authService: AuthService) {
    this.authService.getAuth().subscribe( auth => {
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
