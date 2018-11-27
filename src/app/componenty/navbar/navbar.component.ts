import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../serwisy/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nazwaUzytkownika: string;
  public emailUzytkownika: string;
  public fotoUzytkownika: string;
  public isAdmin: boolean;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nazwaUzytkownika = auth.displayName;
        this.emailUzytkownika = auth.email;
        this.fotoUzytkownika = auth.photoURL;
        this.isAdmin = auth.uid == 'Fohqwou3qSNWS11t6hq3VL5TgVG2';
      } else {
        this.isLogin = false;
      }
    });
  }

  onClickLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
