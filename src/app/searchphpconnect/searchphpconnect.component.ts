import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-searchphpconnect',
  templateUrl: './searchphpconnect.component.html',
  styleUrls: ['./searchphpconnect.component.css'],
  providers: [ConnexionService, TextareaService]
})
export class SearchphpconnectComponent implements OnInit {

  public showSearchResult = false;
  iconphp = "./assets/iconphp.png";
  public codes = [];
  constructor(private router: Router, private logger: ConnexionService, private textarea: TextareaService) { }

  ngOnInit() {
  }

  selectCode(newCodeSelect){
    this.textarea.selectText(newCodeSelect);
  }

  codeselection(valuecode:string){
    APP_GLOBAL.updateCodeSelect(valuecode);
    this.router.navigateByUrl('seecode');
  }

  getCodesResult(tags){
    this.showSearchResult = true;
    this.logger.getCodes(tags).subscribe(
      (data) => this.codes = data
    );
  }

}
