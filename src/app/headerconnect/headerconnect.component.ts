import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_GLOBAL, COOKIE } from '../appglobal';
@Component({
  selector: 'app-headerconnect',
  templateUrl: './headerconnect.component.html',
  styleUrls: ['./headerconnect.component.css']
})
export class HeaderconnectComponent implements OnInit {

  logowts = "./assets/logo.png";
  constructor(public router: Router) { }

  ngOnInit() {
  }

  logout(){
    COOKIE.remove('currentUser')
    this.router.navigateByUrl('');
  }
}
