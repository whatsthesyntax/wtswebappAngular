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
  codeselect="";
  constructor(private textarea: TextareaService) { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }
}
