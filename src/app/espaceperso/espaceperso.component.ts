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
  public code;
  constructor(private logger: ConnexionService,
    private router: Router,
    private codeService: CodesService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.user = JSON.parse(COOKIE.get('currentUser'));
    console.log(COOKIE.get('currentUser'));
    this.codeService.getMesLangages(this.user.userId).subscribe(
      (data) => this.meslangages = data
    );
    this.codeService.getMesCodes(this.user.userId).subscribe(
      (data) => this.mescodes = data
    );
  }

  /*pour editer un code*/
  seeCode(code){
    this.codeService.getCode(code.codeId).subscribe((data) =>
    {
      COOKIE.put('codeselect', JSON.stringify(data));
      this.router.navigateByUrl('editcode');
    });
  }

  deleteCode(codeId){
    console.log(codeId);
    this.codeService.deleteCodePrive(codeId, this.user.name, this.user.passwor);
    this.router.navigateByUrl('perso');
  }

}
