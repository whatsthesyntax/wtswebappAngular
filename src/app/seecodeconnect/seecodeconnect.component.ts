import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { CodesService } from '../codes.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-seecodeconnect',
  templateUrl: './seecodeconnect.component.html',
  styleUrls: ['./seecodeconnect.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SeecodeconnectComponent implements OnInit {
  codeselect="";
  codeId:number;
  logowts = "./assets/index.png";
  tags=[];
  langage={langage:""};
  codei={code:"", description:""};

  codetoadd = {};
  public tagspost=[];
  public langagepost = "";

  public code;
  user;
  constructor(private router: Router,
    private logger: ConnexionService,
    private textarea: TextareaService,
    private codeService: CodesService) { }

  ngOnInit() {
    this.codeselect = APP_GLOBAL.getCodeSelect();
  }
  ngAfterViewInit() {
    this.code= JSON.parse(COOKIE.get('codeselect'));
    this.logger.getUser(JSON.parse(COOKIE.get('currentUser')).userId).subscribe((data) => this.user = data);
    this.codeService.getCode(this.code.codeId).subscribe((d) => {
      this.tagspost = d.tags;
      this.langagepost = d.langage.langage;
    });
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  saveCode(){
    //this.user = JSON.parse(COOKIE.get('currentUser'));
    //this.code= JSON.parse(COOKIE.get('codeselect'));
    this.codei.code = this.code.code;
    for(let tag of this.code.tags){
      if(tag.tag!=null){
        this.tags.push({tag:tag.tag});
      }
    }
    this.langage.langage = this.code.langage.langage;
    this.codetoadd = {code:this.codei, tags:this.tags, langage:this.langage, userid:""+this.user.userId, visible:false};
    console.log(JSON.stringify(this.codetoadd));
    this.textarea.addCodePrive(this.codetoadd, this.user.name, this.user.password);
    this.router.navigateByUrl('perso');
  }
}
