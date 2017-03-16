import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { CodesService } from '../codes.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-editcode',
  templateUrl: './editcode.component.html',
  styleUrls: ['./editcode.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class EditcodeComponent implements OnInit {

  tags=[];
  langage={langage:""};
  codei={code:"", description:""};
  logowts = "./assets/index.png";
  codetoadd = {};

  public codeselect="";
  public codeId:number;
  public code;
  public user;
  public tagspost=[];
  public langagepost = "";
  constructor(private textarea: TextareaService,
    private router: Router,
      private logger: ConnexionService,
      private codeService: CodesService) { }

  ngOnInit() {
    this.codeselect = JSON.parse(COOKIE.get('codeselect')).code;
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }
  ngAfterViewInit() {
    this.code= JSON.parse(COOKIE.get('codeselect'));
    this.logger.getUser(JSON.parse(COOKIE.get('currentUser')).userId).subscribe((data) => this.user = data);
    this.codeService.getCode(this.code.codeId).subscribe((d) => {
      this.tagspost = d.tags;
      this.langagepost = d.langage.langage;
    });
  }
  /*save after edition*/
  saveCode(code:string){
    if(code === this.codeselect){
      alert('le code n\'a pas changé')
    }else{
      this.code= JSON.parse(COOKIE.get('codeselect'));
      this.codei.code = this.code.code;
      for(let tag of this.code.tags){
        if(tag.tag!=null){
          this.tags.push(tag);
        }
      }
      this.langage = this.code.langage;
      this.codetoadd = {codeId:this.code.codeId, code:code, description: "",tags:this.tags, langage:this.langage, user: this.user, visible:false, valide:false};
      console.log(JSON.stringify(this.codetoadd));
      this.textarea.editionCodePrive(this.codetoadd, this.user.name, this.user.password).then(() => {
        this.router.navigateByUrl('perso');
      });
    }
    //this.router.navigateByUrl('perso');
  }

}
