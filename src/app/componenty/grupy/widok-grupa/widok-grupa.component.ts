import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../serwisy/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-widok-grupa',
  templateUrl: './widok-grupa.component.html',
  styleUrls: ['./widok-grupa.component.css']
})
export class WidokGrupaComponent implements OnInit {

  public isLogin: boolean;
  url: string[] = window.location.href.split('/');

  constructor(public authService: AuthService) {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  };

  ngOnInit() {
  }

}
