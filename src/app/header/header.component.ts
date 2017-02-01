import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logowts = "./assets/logo.png";
  iconsignin = "./assets/iconsignin.png";
  iconsignup = "./assets/iconsignup.png";
  constructor() { }

  ngOnInit() {
  }

}
