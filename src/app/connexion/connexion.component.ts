import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { APP_GLOBAL } from '../appglobal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [ConnexionService]
})
export class ConnexionComponent implements OnInit {


  constructor(private logger: ConnexionService, private router: Router) { }

  ngOnInit() {
  }

  logIt(username, passeword){
    APP_GLOBAL.updateMockuserName(username);
    APP_GLOBAL.updateConnect(true);
    this.router.navigateByUrl('perso');
  }

}
