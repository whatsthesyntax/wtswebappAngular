import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from '../connexion.service';
import { APP_GLOBAL } from '../appglobal';

@Component({
  selector: 'app-searchbylangage',
  templateUrl: './searchbylangage.component.html',
  styleUrls: ['./searchbylangage.component.css'],
  providers: [ConnexionService]
})
export class SearchbylangageComponent implements OnInit {

  iconphp = "./assets/iconphp.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  constructor(private router: Router, private logger: ConnexionService) { }

  ngOnInit() {
  }

  codeselection(valuecode:string){
    APP_GLOBAL.updateCodeSelect(valuecode);
    this.router.navigateByUrl('seecode');
  }
  
  selectText(elem){
    elem.focus();
    elem.select();
  }
}
