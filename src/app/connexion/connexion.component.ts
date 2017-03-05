import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { APP_GLOBAL } from '../appglobal';
import { Router } from '@angular/router';
import { Connect } from '../connect';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [ConnexionService]
})
export class ConnexionComponent implements OnInit {

  public users = [];
  constructor(public logger: ConnexionService, public router: Router) { }

  ngOnInit() {
  }

  logIt(username, passeword){
    this.logger.logIn(username, passeword).subscribe(function(data) {
        //SUCCESS
        this.users = data;
        let connect:Connect=new Connect(false);
        for(let user of this.users){
            if(user.name===username && user.password===passeword){
              connect = new Connect(true);
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }
        if(!connect.etat){
          alert('Non utilisateur ou mot de passe incorrecte');
        }

    }, function(error) {
        //FAILURE
        console.log(error);
    });
    this.router.navigateByUrl('seachconnect');
  }

}
