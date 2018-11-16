import { Component, OnInit, Input} from '@angular/core';
import { AuthService } from '../../../serwisy/auth.service';
import { GrupaService } from '../grupa.service';
import { Grupa } from '../grupa.model';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-widok-grupa',
  templateUrl: './widok-grupa.component.html',
  styleUrls: ['./widok-grupa.component.css']
})
export class WidokGrupaComponent implements OnInit {

  grupaDocument: AngularFirestoreDocument<Grupa>;

  isLogin: boolean;
  iduser: string;
  grupa: Grupa;
  public isAutor: boolean;

  url: string[] = window.location.href.split('/');
  idGrupa: string = this.url[4];

  constructor(public authService: AuthService, public grupaService: GrupaService, public db: AngularFirestore) {
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

  }

  DeleteGrupa(idDokumentu) {
    this.grupaDocument = this.db.doc('/grupa/' + idDokumentu);
    this.grupaDocument.delete();
  }

}
