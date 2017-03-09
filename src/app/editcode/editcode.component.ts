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

  tags=[];
  langage={langage:""};
  codei={code:"", description:""};

  codetoadd = {};

  public codeselect="";
  public codeId:number;
  public code;
  public user;
  constructor(private textarea: TextareaService,
    private router: Router) { }

  ngOnInit() {
    this.codeselect = JSON.parse(COOKIE.get('codeselect')).code;
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  /*save after edition*/
  saveCode(code:string){
    if(code === this.codeselect){
      alert('le code n\'a pas changé')
    }else{
      console.log(COOKIE.get('currentUser'));
      this.user = JSON.parse(COOKIE.get('currentUser'));
      this.code= JSON.parse(COOKIE.get('codeselect'));
      this.codei.code = this.code.code;
      for(let tag of this.code.tags){
        this.tags.push({tag:tag.tag});
      }
      this.langage.langage = this.code.langage.langage;
      this.codetoadd = {codeId:this.code.codeId, code:code, description: "",tags:this.tags, langage:this.langage, user: {userId:this.user.userId}, visible:false};
      console.log(JSON.stringify(this.codetoadd));
      this.textarea.editionCodePrive(this.codetoadd, this.user.name, this.user.password).then(() => {
        this.router.navigateByUrl('perso');
      });
    }
    //this.router.navigateByUrl('perso');
  }

}
