import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../serwisy/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent implements OnInit {

  public email: string;
  public password: string; 

  constructor(    
    public authService: AuthService,
    public router: Router,
    public flashMens: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.flashMens.show('Poprawne logowanie',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/home-user']);
    }).catch((err) => {
      this.flashMens.show(err.message,
      {cssClass: 'alert-danger', timeout: 4000});
      this.router.navigate(['/logowanie']);
    });
  }

  onClickGoogleLogin() {
   this.authService.loginGoogle()
    .then((res) => {
        this.router.navigate(['/home-user']);
    }).catch( err => console.log(err.message));
  }

}
