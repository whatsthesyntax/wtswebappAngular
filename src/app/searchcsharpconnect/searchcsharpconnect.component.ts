import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { CodesService } from '../codes.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';
@Component({
  selector: 'app-searchcsharpconnect',
  templateUrl: './searchcsharpconnect.component.html',
  styleUrls: ['./searchcsharpconnect.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchcsharpconnectComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  iconcsharp = "./assets/iconcsharp.png";
  constructor(private router: Router,
    private logger: ConnexionService,
    private textarea: TextareaService,
    private codeService: CodesService) { }

  ngOnInit() {
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  codeselection(valuecode:string, code){
    APP_GLOBAL.updateCodeSelect(valuecode);
    this.codeService.getCode(code.codeId).subscribe((data) =>
    {
      COOKIE.put('codeselect', JSON.stringify(data));
      this.router.navigateByUrl('seecodeconnect');
    });
  }

  getCodesResult(searchreq){
    let result = this.codeService.getCodesByLangage("csharp", searchreq);
    this.showSearchResult = true;
    result.subscribe((data) => this.codes=data);
  }

}
