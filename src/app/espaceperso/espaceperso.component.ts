import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';
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
  connect = APP_GLOBAL.getConnect();
  constructor(private logger: ConnexionService, private router: Router) { }

  ngOnInit() {
    console.log(APP_GLOBAL.getConnect());
    console.log(this.connect);
  }

  ngAfterViewInit() {
    this.logger.getMesLangages().subscribe(
      (data) => this.meslangages = data.langages
    );
    this.logger.getMesCodes().subscribe(
      (data) => this.mescodes = data
    );
  }

  seeCode(codeValue:string){
    APP_GLOBAL.updateCodeSelect(codeValue);
    this.router.navigateByUrl('seecode');
  }

}
