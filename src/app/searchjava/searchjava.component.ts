import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-searchjava',
  templateUrl: './searchjava.component.html',
  styleUrls: ['./searchjava.component.css'],
  providers: [ConnexionService]
})
export class SearchjavaComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  iconjava = "./assets/iconjava.png";
  constructor(private router: Router, private logger: ConnexionService) { }

  ngOnInit() {
  }
  selectText(elem){
    elem.focus();
    elem.select();
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
