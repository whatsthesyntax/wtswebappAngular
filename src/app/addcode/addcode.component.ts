import { Component, OnInit } from '@angular/core';
import { APP_GLOBAL, COOKIE } from '../appglobal';

@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.css']
})
export class AddcodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JSON.parse(COOKIE.get('currentUser')));
  }

}
