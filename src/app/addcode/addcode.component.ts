import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { CodesService } from '../codes.service';
import { Router } from '@angular/router';
import { TextareaService } from '../textarea.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.css'],
  providers: [ConnexionService, CodesService, TextareaService]
})
export class AddcodeComponent implements OnInit {
  tags=[];
  code={code:"", description:""};
  langage={langage:""};
  codetoadd = {};
  user;
  constructor(private logger: ConnexionService,
    private router: Router,
    private codeService: CodesService,
    private textarea: TextareaService) { }

  ngOnInit() {
    console.log(JSON.parse(COOKIE.get('currentUser')));
  }


  addMonCode(langage, tags:string, code:string){
    this.user = JSON.parse(COOKIE.get('currentUser'));
    for(let tag of tags.split(" ")){
      this.tags.push({tag:tag});
    }
    this.code.code = code;
    this.langage.langage = langage;
    this.codetoadd = {code : this.code, tags: this.tags, langage:this.langage, userId:this.user.userId, visible:false};
    console.log(JSON.stringify(this.codetoadd));
    this.textarea.addCodePrive(this.codetoadd, this.user.name, this.user.password);
  }
}
