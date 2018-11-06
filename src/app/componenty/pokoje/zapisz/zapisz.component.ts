import { Component, OnInit } from '@angular/core';
import { Pokoj } from '../pokoj.model';
import { PokojService } from '../pokoj.service';
import { AuthService } from '../../../serwisy/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-zapisz',
  templateUrl: './zapisz.component.html',
  styleUrls: ['./zapisz.component.css']
})
export class ZapiszComponent implements OnInit {

  uczestnicy: string[];
  uczestnik: string;
  url:string[] = window.location.href.split('/');
  idPokoj: string;
  tenPokoj: Pokoj;
  isLogin: boolean;
  userid: string;
  
  zleHaslo:boolean = false ;
  dobreHaslo:boolean = false ;

  constructor(private pokojService: PokojService, private as: AuthService, private router: Router) {
    this.idPokoj = this.url[3];

    pokojService.getPokoj(this.url[3]).subscribe( data => this.tenPokoj = data.find(p => p.id == this.idPokoj));
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userid = auth.uid;
      } else {
        this.isLogin = false;
      }
    });
  }


  zapiszSie(f: NgForm) {
    if(f.value.hasloPokoj == this.tenPokoj.haslo) {
      this.zleHaslo = false;
      this.tenPokoj.zapisani.push(this.uczestnik);

      this.pokojService.updatePokoj(this.tenPokoj, this.idPokoj, this.url[3]);
      f.resetForm();
      this.dobreHaslo = true;
      setTimeout(
        this.router.navigateByUrl('/pokoje/'+this.tenPokoj.id), 20000);
    } else {
      this.zleHaslo = true;
    }
  }

  ngOnInit() {
    this.uczestnik = this.userid;
    console.log(this.tenPokoj.haslo);
  }

}
