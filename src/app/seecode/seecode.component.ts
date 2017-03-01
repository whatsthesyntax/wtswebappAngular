import { Component, OnInit } from '@angular/core';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-seecode',
  templateUrl: './seecode.component.html',
  styleUrls: ['./seecode.component.css']
})
export class SeecodeComponent implements OnInit {
  codeselect="";
  constructor() { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }
}
