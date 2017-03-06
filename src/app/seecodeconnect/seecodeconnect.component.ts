import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-seecodeconnect',
  templateUrl: './seecodeconnect.component.html',
  styleUrls: ['./seecodeconnect.component.css'],
  providers: [ConnexionService, TextareaService]
})
export class SeecodeconnectComponent implements OnInit {
  public codeselect="";
  public codeId:number;
  public code;
  public user;
  constructor(private textarea: TextareaService) { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  saveCode(){
    this.user = JSON.parse(COOKIE.get('currentUser'));
    this.code = JSON.parse(COOKIE.get('codeselect'));
    this.code.user = this.user.codeId;
    this.textarea.addCodePrive(this.code, this.user.name, this.user.password);
  }
}
