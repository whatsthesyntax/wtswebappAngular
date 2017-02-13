import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [ConnexionService]
})
export class ConnexionComponent implements OnInit {

  constructor(private logger: ConnexionService) { }

  ngOnInit() {
  }

  logIt(){
    this.logger.log();
  }

}
