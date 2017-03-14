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
    this.user.password = newValue;
    COOKIE.put('currentUser', JSON.stringify(this.user));
    this.logger.updateUser(this.user);
  }
  modifName(newValue){
    let user = {userid:this.user.userId, name:newValue};
    this.user.name = newValue;
    COOKIE.put('currentUser', JSON.stringify(this.user));
    this.logger.updateUser(this.user);
  }
  modifEmail(newValue){
    let user = {userid:this.user.userId, email:newValue};
    this.user.email = newValue;
    COOKIE.put('currentUser', JSON.stringify(this.user));
    this.logger.updateUser(this.user);
  }
  quit(){
    this.logger.deleteUser(this.user.userId);
    COOKIE.remove('currentUser');
    this.router.navigateByUrl('');
  }
}
