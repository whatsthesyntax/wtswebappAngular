import { Injectable } from '@angular/core';

@Injectable()
export class TextareaService {

  constructor() { }

  /*Selection d'un text dans textarea*/
  selectText(elem){
    elem.focus();
    elem.select();
  }
}
