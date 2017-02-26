import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public connect = true;
  iconaccueil = "./assets/iconaccueil.png";
  iconjava = "./assets/iconjava.png";
  iconcsharp = "./assets/iconcsharp.png";
  iconcmenu = "./assets/iconmenu.png";
  iconphp = "./assets/iconphp.png";

  constructor() { }

  ngOnInit() {
  }

}
