import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [ConnexionService]
})
export class InscriptionComponent implements OnInit {

  constructor(private logger: ConnexionService) { }

  ngOnInit() {

  }

  logItUp(username, email, passeword){
    this.logger.logUp(username,email,passeword);
  }
}
