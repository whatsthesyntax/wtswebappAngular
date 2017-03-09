import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { APP_GLOBAL, COOKIE } from '../appglobal';
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
  constructor(private logger: ConnexionService,
    private router: Router) { }

  ngOnInit() {
  }

  wait(ms){
   let start = new Date().getTime();
   let end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

  logIt(username, passeword){
    this.logger.logIn(username, passeword).subscribe(data => {
        //SUCCESS
        this.users = data;
        let connect:Connect=new Connect(false);
        for(let user of this.users){
            if(user.name===username && user.password===passeword){
              connect = new Connect(true);
              console.log(JSON.stringify(user));
              COOKIE.put('currentUser', JSON.stringify(user));
            }
        }
        if(!connect.etat){
          alert('Non utilisateur ou mot de passe incorrecte');
          this.router.navigateByUrl('');
        }else{
          this.router.navigateByUrl('seachconnect');
        }

    }, error => {
        //FAILURE
        console.log(error);
    });



  }


}
