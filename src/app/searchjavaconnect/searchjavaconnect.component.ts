import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { TextareaService } from '../textarea.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-searchjavaconnect',
  templateUrl: './searchjavaconnect.component.html',
  styleUrls: ['./searchjavaconnect.component.css'],
  providers: [ConnexionService, TextareaService]
})
export class SearchjavaconnectComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  iconjava = "./assets/iconjava.png";
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
