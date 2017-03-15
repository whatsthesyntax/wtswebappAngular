import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { CodesService } from '../codes.service';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-searchcsharp',
  templateUrl: './searchcsharp.component.html',
  styleUrls: ['./searchcsharp.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchcsharpComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  public codetagMap = {};
  logowts = "./assets/index.png";
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

  codeselection(valuecode:string, codeId:number){
    APP_GLOBAL.updateCodeId(codeId);
    APP_GLOBAL.updateCodeSelect(valuecode);
    this.router.navigateByUrl('seecode');
  }

  getCodesResult(searchreq){
    let result = this.codeService.getCodesByLangage("csharp", searchreq);
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
