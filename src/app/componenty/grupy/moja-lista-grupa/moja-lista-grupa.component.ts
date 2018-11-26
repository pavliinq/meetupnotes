import { Component, OnInit } from '@angular/core';
import { Grupa } from '../grupa.model';
import { GrupaService } from '../grupa.service';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-moja-lista-grupa',
  templateUrl: './moja-lista-grupa.component.html',
  styleUrls: ['./moja-lista-grupa.component.css']
})
export class MojaListaGrupaComponent implements OnInit {

  isLogin: boolean;
  modo: boolean;
  grupy: Grupa[];
  values: string = '';
  user: string;

  constructor(public grupaService: GrupaService, public authService: AuthService) { 
    this.grupaService.getGrupa().subscribe(data => { 
      this.grupy = data.filter(
        g => g.autor == this.user) })
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.user = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
  }

  ngOnInit() {
  }

  onKey(event: any) { 
      this.values = event.target.value ;
    }
}
