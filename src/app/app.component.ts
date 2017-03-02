import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { APP_GLOBAL } from './appglobal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor() {
        document.addEventListener('click', () => this.onClick());
  }
  onClick( ) {
    console.log("click !")
  }
  /*onClick(ev:clickEvent) {
    // do something meaningful with it
    console.log(`The user just pressed ${ev.key}!`);
    ,
    host: {
      '(document:click)': 'onClick($event)'
    }
  }*/
}
