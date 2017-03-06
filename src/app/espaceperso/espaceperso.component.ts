import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { CodesService } from '../codes.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-espaceperso',
  templateUrl: './espaceperso.component.html',
  styleUrls: ['./espaceperso.component.css'],
  providers: [ConnexionService, CodesService]
})
export class EspacepersoComponent implements OnInit {

  public mescodes = [];
  public meslangages= [];
  public user;
  constructor(private logger: ConnexionService,
    private router: Router,
  private codeService: CodesService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.logger.getMesLangages().subscribe(
      (data) => this.meslangages = data.langages
    );
    this.logger.getMesCodes().subscribe(
      (data) => this.mescodes = data
    );
  }

  seeCode(codeValue){
    APP_GLOBAL.updateCode(codeValue);
    this.router.navigateByUrl('editcode');
  }

  deleteCode(code){
    this.user = JSON.parse(COOKIE.get('currentUser'));
    code.user = "";
    this.codeService.deleteCodePrive(code, this.user.name, this.user.passwor);
    this.router.navigateByUrl('perso');
  }

}
