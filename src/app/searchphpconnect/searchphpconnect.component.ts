import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { CodesService } from '../codes.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';
@Component({
  selector: 'app-searchphpconnect',
  templateUrl: './searchphpconnect.component.html',
  styleUrls: ['./searchphpconnect.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchphpconnectComponent implements OnInit {

  public showSearchResult = false;
  iconphp = "./assets/iconphp.png";
  public codes = [];
  public codetagMap = {};
  logowts = "./assets/index.png";
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
    let result = this.codeService.getCodesByLangage("php", searchreq);
    this.showSearchResult = true;
    result.subscribe((data) =>
    {
      this.codes=data;
      for(let c of this.codes){
        this.codeService.getCode(c.codeId).subscribe((d) => {
          this.codetagMap[c.codeId] = d.tags;
        });
      }
    });
  }

}
