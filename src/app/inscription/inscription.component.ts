import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [ConnexionService]
})
export class InscriptionComponent implements OnInit {
  ok = true;
  users = [];
  constructor(private logger: ConnexionService, public router: Router) { }

  ngOnInit() {

  }


  logItUp(username, email, passeword){
    this.logger.logUp(username, email, passeword);
    this.router.navigateByUrl('connexion');
  }
  ngAfterViewInit() {

  }
}
