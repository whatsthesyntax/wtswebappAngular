import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { CodesService } from '../codes.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-searchjava',
  templateUrl: './searchjava.component.html',
  styleUrls: ['./searchjava.component.css'],
  providers: [ConnexionService, TextareaService, CodesService]
})
export class SearchjavaComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  public codetagMap = {};
  logowts = "./assets/index.png";
  iconjava = "./assets/iconjava.png";
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
    let result = this.codeService.getCodesByLangage("java", searchreq);
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
