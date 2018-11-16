import { Component, OnInit, Input } from '@angular/core';
import { PokojService } from '../pokoj.service';
import { Pokoj } from '../pokoj.model';
import { AuthService } from '../../../serwisy/auth.service';
import { Grupa } from '../../grupy/grupa.model';

@Component({
  selector: 'app-pokoj',
  templateUrl: './pokoj.component.html',
  styleUrls: ['./pokoj.component.css']
})
export class PokojComponent implements OnInit {

  public isLogin: boolean;
  public userid: string;
  public zapisany_test: boolean;
  public idPokoj: string;

  url:string[] = window.location.href.split('/');


  @Input('pokoj') pokoj: Pokoj;

  constructor(public pokojService: PokojService, private authService: AuthService) {
  }

  ngOnInit() {
  this.authService.getAuth().subscribe( auth => {
    if (auth) {
      this.isLogin = true;
      this.userid = auth.uid;

      for (let z of this.pokoj.zapisani) {
        //console.log('zapisani:' + z)
        if ( z === this.userid) {
          this.zapisany_test = true;
          //console.log('znalazlem');
        } else {
          this.zapisany_test = false;
          //console.log('nie znalazlem');
        }
      }
    } else {
      this.isLogin = false;
    }

  });
}

}
