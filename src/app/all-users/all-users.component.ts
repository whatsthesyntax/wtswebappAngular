import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  providers: [ConnexionService]
})
export class AllUsersComponent implements OnInit {

  users = "Test";
  constructor(private logger: ConnexionService) { }

  ngOnInit() {
  }

  allUsers(){
    this.users = ""+this.logger.getUsers();
  }

}
