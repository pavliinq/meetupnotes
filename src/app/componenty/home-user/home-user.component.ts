import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../serwisy/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  public isLogin: boolean;
  public nazwaUzytkownika: string;
  public emailUzytkownika: string;
  public fotoUzytkownika: string;
  public iduser: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nazwaUzytkownika = auth.displayName;
        this.emailUzytkownika = auth.email;
        this.fotoUzytkownika = auth.photoURL;
        this.iduser = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
  }

}
