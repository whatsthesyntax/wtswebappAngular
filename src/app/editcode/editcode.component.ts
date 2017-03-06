import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-editcode',
  templateUrl: './editcode.component.html',
  styleUrls: ['./editcode.component.css'],
  providers: [ConnexionService, TextareaService]
})
export class EditcodeComponent implements OnInit {

  public codeselect="";
  public codeId:number;
  public code;
  public user;
  constructor(private textarea: TextareaService,
    private router: Router) { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCode().code;
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  /*save after edition*/
  saveCode(code:string){
    if(code === this.codeselect){
      alert('le code n\'a pas changé')
    }else{
      this.code.code = code;
      this.textarea.editionCodePrive(this.code, this.user.name, this.user.password);
    }
    this.router.navigateByUrl('perso');
  }

}
