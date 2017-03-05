import { Component, trigger, state, style, transition, animate } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { APP_GLOBAL } from './appglobal';
import { Connect } from './connect';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    localStorage.clear();
  }

}
