import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';

@Component({
  selector: 'app-seecode',
  templateUrl: './seecode.component.html',
  styleUrls: ['./seecode.component.css'],
  providers: [ConnexionService, TextareaService]
})

export class SeecodeComponent implements OnInit {
  codeselect="";
  constructor(private textarea: TextareaService) { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }
}
