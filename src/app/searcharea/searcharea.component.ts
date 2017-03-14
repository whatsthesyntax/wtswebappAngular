import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { CodesService } from '../codes.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-searcharea',
  templateUrl: './searcharea.component.html',
  styleUrls: ['./searcharea.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchareaComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  constructor(private router: Router,
     private logger: ConnexionService,
     private textarea: TextareaService,
     private codeService: CodesService) { }

  ngOnInit() {

  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  codeselection(valuecode:string, codeId:number){
    APP_GLOBAL.updateCodeId(codeId);
    APP_GLOBAL.updateCodeSelect(valuecode);
    this.router.navigateByUrl('seecode');
  }

  getCodesResult(searchreq){
    let result = this.codeService.getCodes(searchreq);
    this.showSearchResult = true;
    result.subscribe((data) => this.codes=data);
  }

  keyup(){
    
  }
}
