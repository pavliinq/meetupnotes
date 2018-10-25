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

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.nazwaUzytkownika = auth.displayName;
        this.emailUzytkownika = auth.email;
        this.fotoUzytkownika = auth.photoURL;
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
