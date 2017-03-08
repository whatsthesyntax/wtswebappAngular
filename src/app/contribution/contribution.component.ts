import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { CodesService } from '../codes.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';
@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css'],
  providers: [ConnexionService, CodesService]
})
export class ContributionComponent implements OnInit {

  types = [ 'java', 'php', 'csharp' ];
  order = {type: 'java'};
  tags=[];
  code={code:"", description:""};
  langage={langage:""};
  codetoadd = {};
  constructor(private logger: ConnexionService,
    private router: Router,
    private codeService: CodesService) { }

  ngOnInit() {
  }

  callLang(value){
    console.log(value);
    this.order.type=value;
  }

  contribut(langage, tags:string, code:string){
    for(let tag of tags.split(" ")){
      this.tags.push({tag:tag});
    }
    this.code.code = code;
    this.langage.langage = langage;
    this.codetoadd = {code : this.code, tags: this.tags, langage:this.langage};
    this.codeService.addCode(this.codetoadd);
  }
}
