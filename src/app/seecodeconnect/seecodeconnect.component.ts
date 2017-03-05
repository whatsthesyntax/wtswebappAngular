import { Component, OnInit } from '@angular/core';
import { APP_GLOBAL } from '../appglobal';

@Component({
  selector: 'app-seecodeconnect',
  templateUrl: './seecodeconnect.component.html',
  styleUrls: ['./seecodeconnect.component.css']
})
export class SeecodeconnectComponent implements OnInit {
  codeselect="";
  constructor() { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }
  selectText(elem){
    elem.focus();
    elem.select();
  }
}
