import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { Router } from '@angular/router';
import { Grupa } from '../grupa.model';
import { GrupaService } from '../grupa.service';
import { AuthService } from '../../../serwisy/auth.service';

@Component({
  selector: 'app-lista-grupa',
  templateUrl: './lista-grupa.component.html',
  styleUrls: ['./lista-grupa.component.css']
})
export class ListaGrupaComponent implements OnInit {

  isLogin: boolean;
  values:string ='';
  modo:boolean;
  grupy: Grupa[];

  onKey(event: any) { 
    this.values = event.target.value ;
  }
  
  ngOnInit() { 
  }
 
  constructor(private db: AngularFirestore, public grupaServe: GrupaService, public authService: AuthService) {
    this.grupaServe.getGrupa().subscribe(data => { this.grupy = data; })
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });

    }
    onKeydown(egg) {
      this.modo=true;
    }

}
