import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-adminform',
  templateUrl: './adminform.component.html',
  styleUrls: ['./adminform.component.css'],
  providers: [ConnexionService]
})

export class AdminformComponent implements OnInit {

  constructor(private logger: ConnexionService) { }

  ngOnInit() {
  }

  addIt(codep, langage, tagsp){
    this.logger.addCode(codep, langage, tagsp);
  }
}
