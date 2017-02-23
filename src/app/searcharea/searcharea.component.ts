import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
@Component({
  selector: 'app-searcharea',
  templateUrl: './searcharea.component.html',
  styleUrls: ['./searcharea.component.css'],
  providers: [ConnexionService]
})
export class SearchareaComponent implements OnInit {

  public showSearchResult = false;
  public codes = [];
  constructor(private logger: ConnexionService) { }

  ngOnInit() {
  }

  selectText(elem){
    elem.focus();
    elem.select();
  }

  getCodesResult(tags){
    this.showSearchResult = true;
    this.logger.getCodes(tags).subscribe(
      (data) => this.codes = data
    );
  }
}
