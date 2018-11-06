import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../serwisy/auth.service';

import { Router } from '@angular/router';
import { GrupaService } from '../grupa.service';
import { Grupa } from '../grupa.model';

@Component({
  selector: 'app-widok-grupa',
  templateUrl: './widok-grupa.component.html',
  styleUrls: ['./widok-grupa.component.css']
})
export class WidokGrupaComponent implements OnInit {

  public isLogin: boolean;
  public autor: string;
  public iduser: string;
  grupa: Grupa;

  url: string[] = window.location.href.split('/');

  constructor(public authService: AuthService, public grupaService: GrupaService) {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.autor = auth.displayName;
        this.iduser = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
    this.grupaService.getGrupa().subscribe(data => {this.grupa = data.filter(g => g.id==this.url[4])[0];});
  };

  ngOnInit() {
  }

}
