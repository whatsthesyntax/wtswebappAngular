import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarconnect',
  templateUrl: './sidebarconnect.component.html',
  styleUrls: ['./sidebarconnect.component.css']
})
export class SidebarconnectComponent implements OnInit {

  iconaccueil = "./assets/iconaccueil.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  iconcmenu = "./assets/iconmenu.png";
  iconphp = "./assets/iconphp.png";
  constructor() { }

  ngOnInit() {
  }

}
