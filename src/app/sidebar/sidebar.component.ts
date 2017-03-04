import { Component, OnInit, AfterViewInit} from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Router } from '@angular/router';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [ConnexionService]
})
export class SidebarComponent implements OnInit {
  iconaccueil = "./assets/iconaccueil.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  iconcmenu = "./assets/iconmenu.png";
  iconphp = "./assets/iconphp.png";

  
  public allLangages = [];
  public allTags = [];
  constructor(private logger: ConnexionService, private router: Router) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.logger.getLangagesTags().subscribe(
      (data) => this.allLangages = data.langages,
      (data) => this.allTags = data.tags
    );

  }



}
