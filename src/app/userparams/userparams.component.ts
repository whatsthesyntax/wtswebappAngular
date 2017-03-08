import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { CodesService } from '../codes.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-userparams',
  templateUrl: './userparams.component.html',
  styleUrls: ['./userparams.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class UserparamsComponent implements OnInit {

  public user;
  public showModifemail = false;
  public showModifmdp = false;
  public showModifname = false;
  constructor(private router: Router,
    private logger: ConnexionService,
    private textarea: TextareaService,
    private codeService: CodesService) { }

  ngOnInit() {
    this.user = JSON.parse(COOKIE.get('currentUser'));
  }

  ngAfterViewInit() {


  }

  setShowName(){
    this.showModifname = !this.showModifname;
  }
  setShowEmail(){
    this.showModifemail = !this.showModifemail;
  }
  setShowMdp(){
    this.showModifmdp = !this.showModifmdp;
  }

  modifMdp(newValue){
    let user = {id:this.user.userId, password:newValue}
    this.user.name = newValue;
    COOKIE.remove('currentUser');
    COOKIE.remove('currentUser', JSON.stringify(user));
    this.logger.updateUser(user);
  }
  modifName(newValue){
    let user = {id:this.user.userId, name:newValue}
    this.user.name = newValue;
    COOKIE.remove('currentUser');
    COOKIE.remove('currentUser', JSON.stringify(user));
    this.logger.updateUser(user);
  }
  modifEmail(newValue){
    let user = {id:this.user.userId, email:newValue}
    this.user.name = newValue;
    COOKIE.remove('currentUser');
    COOKIE.remove('currentUser', JSON.stringify(user));
    this.logger.updateUser(user);
  }
}
