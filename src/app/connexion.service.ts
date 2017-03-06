import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { UserConnect } from './userconnect';
import { User } from './user';
import { Code } from './code';
import { SearchReq } from './searchreq';
import { Tag } from  './tag';

@Injectable()
export class ConnexionService {
  /*attributs*/
  userconnect: UserConnect;
  user: User;


  public headers = new Headers({"Content-Type": "application/json"});
  public options = new RequestOptions({ headers: this.headers });

  private userUrlInscription = 'http://vps381611.ovh.net:8080/WTSAPI/users';
  private usersUrl = 'http://vps381611.ovh.net:8080/WTSAPI//users';

  /*A faire*/
  private userUrlConnect = 'http://vps381611.ovh.net:8080/WTSAPI/users';
  private userUrlAddTag = 'http://localhost:8080/addTag';


  constructor(private http: Http) { }

  /*Autorisation*/
  createAuthorizationHeader(headers: Headers, username: string, password: string) {
    headers.append('Authorization', 'Basic ' +
      btoa(username+':'+password));
  }

  /*Inscription*/
  logUp(name, email, password){
    this.user = new User(name,email,password);
    return this.http.post(this.userUrlInscription, JSON.stringify(this.user), {headers:this.headers})
    .toPromise()
    .catch(this.handleError);
  }

  /* Connexion*/
  logIn(username, passeword){
    this.userconnect = new UserConnect(username,passeword);
    return this.http.get(this.userUrlInscription).map(
      (res) => res.json()
    );
  }

  /**/
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
