import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; 
import { Router } from '@angular/router';
import { Grupa } from '../grupa.model';
import { GrupaService } from '../grupa.service';
import { AuthService } from '../../../serwisy/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-grupa',
  templateUrl: './lista-grupa.component.html',
  styleUrls: ['./lista-grupa.component.css']
})
export class ListaGrupaComponent implements OnInit {

/*   private isLogin: boolean;
  grupy: Observable<any[]>;
  allGrupy: any;

  constructor(private db: AngularFireDatabase) {
    this.grupy = db.list('/grupa').valueChanges();
    this.grupy.subscribe(grupy => {
      this.allGrupy = grupy;
      console.log(this.allGrupy);
    })
    console.log(this.grupy);
  }

  onKeydown() {
  } */

  isLogin: boolean;
  values:string ='';
  account_type: string;

  strona: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
  modo:boolean;
  onKey(event: any) { 
    this.values = event.target.value ;
  }
  
  ngOnInit() { 
  }

  grupy: Grupa[];
  autor: string;
 
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
      
      this.modo=true
    }

}
