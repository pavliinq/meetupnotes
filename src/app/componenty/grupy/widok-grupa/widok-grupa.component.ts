import { Component, OnInit, Input } from '@angular/core';
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
  public iduser: string;
  @Input('grupa') grupa: Grupa;
  public isAutor: boolean;

  url: string[] = window.location.href.split('/');

  constructor(public authService: AuthService, public grupaService: GrupaService) {
    this.grupaService.getGrupa().subscribe(data => {this.grupa = data.filter(g => g.id==this.url[4])[0];});
  };

  ngOnInit() {

    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;

        this.iduser = auth.uid;
        console.log(this.iduser)
        //console.log('autor: ' +this.grupa.autor)
        //console.log('id grupa: ' +this.grupa.id)

        this.isAutor = true;
        // if (this.grupa.autor == this.iduser) {
        //   this.isAutor = true;
        // } else {
        //   this.isAutor = false;
        // }
      } else {
        this.isLogin = false;
      }  
    });
  }

}
