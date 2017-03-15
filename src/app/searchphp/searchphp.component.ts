import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { CodesService } from '../codes.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-searchphp',
  templateUrl: './searchphp.component.html',
  styleUrls: ['./searchphp.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchphpComponent implements OnInit {

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

  codeselection(valuecode:string, codeId:number){
    APP_GLOBAL.updateCodeSelect(valuecode);
    APP_GLOBAL.updateCodeId(codeId);
    this.router.navigateByUrl('seecode');
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
