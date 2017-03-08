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

  tags=[];
  langage={langage:""};
  codei={code:"", description:""};

  codetoadd = {};

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
    for(let tag of this.code.tags){
      this.tags.push({tag:tag.tag});
    }
    this.codei.code = this.code.code;
    this.codetoadd = {code:this.codei, tags:this.tags, langage:this.code.langage.langage, userid:this.user.userId, visible:false}
    this.textarea.addCodePrive(this.codetoadd, this.user.name, this.user.password);
  }
}
