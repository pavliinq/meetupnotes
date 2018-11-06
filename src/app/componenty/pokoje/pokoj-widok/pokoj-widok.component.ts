import { Component, OnInit, Input } from '@angular/core';
import { Pokoj } from '../pokoj.model';


@Component({
  selector: 'app-pokoj-widok',
  templateUrl: './pokoj-widok.component.html',
  styleUrls: ['./pokoj-widok.component.css']
})
export class PokojWidokComponent implements OnInit {

  url: string[] = window.location.href.split('/');
  //url1: string = window.location.href.substr(window.location.href.lastIndexOf('/') + 1, 20);


  // public adres = window.location.href;
  // url11 = this.adres.replace('this.url','');
  // url1 = this.url11.split('/');

  constructor() { }

  ngOnInit() {
  }

}
