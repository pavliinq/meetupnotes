import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../../serwisy/auth.service';
import { GrupaService } from '../grupa.service';
import { Grupa } from '../grupa.model';

@Component({
  selector: 'app-widok-grupa',
  templateUrl: './widok-grupa.component.html',
  styleUrls: ['./widok-grupa.component.css']
})
export class WidokGrupaComponent implements OnInit {

  isLogin: boolean;
  iduser: string;
  grupa: Grupa;
  public isAutor: boolean;

  url: string[] = window.location.href.split('/');
  idGrupa: string = this.url[4];

  constructor(public authService: AuthService, public grupaService: GrupaService) {
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.iduser = auth.uid;
      } else {
        this.isLogin = false;
      }  
    });
    this.grupaService.getGrupa().subscribe( data => { 
      this.grupa = data.filter(g => g.id == this.idGrupa)[0]; 
      this.checkIsAutor();
    });
  };

  checkIsAutor() {
    this.isAutor = this.iduser == this.grupa.autor
  }
 
  ngOnInit() {
    //this.isAutor = this.iduser == this.grupa.autor;
  }

}
