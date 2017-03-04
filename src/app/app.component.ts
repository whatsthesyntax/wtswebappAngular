import { Component, trigger, state, style, transition, animate } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { APP_GLOBAL } from './appglobal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {
  public connect = APP_GLOBAL.getConnect();
  menuState:string = 'out';
  title = 'app works!';
  constructor() {
  }

  toggleMenu() {
    // 1-line if statement that toggles the value:
    console.log("click !!");
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
