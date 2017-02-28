import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcharea',
  templateUrl: './searcharea.component.html',
  styleUrls: ['./searcharea.component.css'],
  providers: [ConnexionService]
})
export class SearchareaComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  constructor(private router: Router, private logger: ConnexionService) { }

  ngOnInit() {
  }

  selectText(elem){
    elem.focus();
    elem.select();
  }
  codeselection(valuecode){
    //codeselect=valuecode;
    console.log("le code est  : \n");
    this.router.navigateByUrl('seecode');
  }
  getCodesResult(tags){
    this.showSearchResult = true;
    this.logger.getCodes(tags).subscribe(
      (data) => this.codes = data
    );
  }
}
