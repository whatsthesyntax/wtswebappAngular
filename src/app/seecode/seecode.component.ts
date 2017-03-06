import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-seecode',
  templateUrl: './seecode.component.html',
  styleUrls: ['./seecode.component.css'],
  providers: [ConnexionService, TextareaService]
})

export class SeecodeComponent implements OnInit {
  codeselect="";
  codeId:number;
  constructor(private textarea: TextareaService) { }

  ngOnInit() {
    this.codeId = APP_GLOBAL.getCodeId();
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  saveCode(){
    alert('Voueillez vous connecter pour sauvgarder ce code');
  }
}
