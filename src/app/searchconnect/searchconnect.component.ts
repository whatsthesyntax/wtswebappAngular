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
    private codesService: CodesService) { }

  ngOnInit() {
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  codeselection(valuecode:string){
    APP_GLOBAL.updateCodeSelect(valuecode);
    this.router.navigateByUrl('seecodeconnect');
  }

  getCodesResult(tags){
    this.showSearchResult = true;
    this.codesService.getCodes(tags).subscribe(
      (data) => this.codes = data
    );
  }
  
}
