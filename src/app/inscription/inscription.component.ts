import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [ConnexionService]
})
export class InscriptionComponent implements OnInit {
  ok = true;
  users = [];
  constructor(private logger: ConnexionService) { }

  ngOnInit() {
    this.logger.getUsers().subscribe(
      (data) => this.users = data
    );
  }

  logItUp(username, email, passeword){
    this.logger.logUp(username, email, passeword);
  }
  ngAfterViewInit() {

  }
}
