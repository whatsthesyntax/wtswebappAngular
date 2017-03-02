import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { APP_GLOBAL } from '../appglobal';

@Component({
  selector: 'app-espaceperso',
  templateUrl: './espaceperso.component.html',
  styleUrls: ['./espaceperso.component.css'],
  providers: [ConnexionService]
})
export class EspacepersoComponent implements OnInit {

  public mescodes = [];
  public meslangages= [];
  constructor(private logger: ConnexionService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.logger.getMesLangages().subscribe(
      (data) => this.meslangages = data
    );
    this.logger.getMesCodes().subscribe(
      (data) => this.mescodes = data
    );
    console.log(this.mescodes);
    console.log(this.meslangages);
  }


}
