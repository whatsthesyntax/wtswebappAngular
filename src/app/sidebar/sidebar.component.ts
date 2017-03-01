import { Component, OnInit } from '@angular/core';
import { APP_GLOBAL } from '../appglobal';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  iconaccueil = "./assets/iconaccueil.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  iconcmenu = "./assets/iconmenu.png";
  iconphp = "./assets/iconphp.png";

  constructor() { }

  ngOnInit() {

  }

}
