import { Component, OnInit} from '@angular/core';
import { PokojService } from '../pokoj.service';
import { AuthService } from '../../../serwisy/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Pokoj } from '../pokoj.model';

@Component({
  selector: 'app-zapisz',
  templateUrl: './zapisz.component.html',
  styleUrls: ['./zapisz.component.css']
})
export class ZapiszComponent implements OnInit {

  uczestnicy: string[];
  url:string[] = window.location.href.split('/');
  idPokoj: string = this.url[5];
  pokoj: Pokoj;
  isLogin: boolean;
  userid: string;
  zleHaslo:boolean = false ;
  dobreHaslo:boolean = false ;

  constructor(private pokojService: PokojService, private as: AuthService, private router: Router) {
    this.as.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userid = auth.uid;
        //console.log(this.userid)
      } else {
        this.isLogin = false;
      }
    });
    this.pokojService.getPokoj(this.url[4])
      .subscribe(data => { this.pokoj = data.filter ( p => p.id == this.url[5])[0];});
    //console.log(this.idPokoj)
  }

  zapiszSie(f: NgForm) {
    if(f.value.hasloPokoj == this.pokoj.haslo) {
      this.zleHaslo = false;
      this.pokoj.zapisani.push(this.userid);
      this.pokojService.updatePokoj(this.pokoj, this.idPokoj, this.url[4]);
      f.resetForm();
      this.dobreHaslo = true;
      setTimeout(
        this.router.navigateByUrl('/pokoje/'+this.pokoj.id), 20000);
    } else {
      this.zleHaslo = true;
    }
  }

  ngOnInit() {
  }

}
 