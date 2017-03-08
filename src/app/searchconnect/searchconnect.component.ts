import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';
import { CodesService } from '../codes.service';

@Component({
  selector: 'app-searchconnect',
  templateUrl: './searchconnect.component.html',
  styleUrls: ['./searchconnect.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchconnectComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];

  constructor(private router: Router,
    private logger: ConnexionService,
    private textarea: TextareaService,
    private codeService: CodesService) { }

  ngOnInit() {
    console.log(COOKIE.get('currentUser'));
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  codeselection(valuecode:string, code){
    APP_GLOBAL.updateCodeSelect(valuecode);
    COOKIE.put('codeselect', JSON.stringify(code));
    this.router.navigateByUrl('seecodeconnect');
  }

  getCodesResult(searchreq){
    let result = this.codeService.getCodes(searchreq);
    this.showSearchResult = true;
    result.subscribe((data) => this.codes=data);
  }

}
