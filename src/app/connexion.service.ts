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

@Injectable()
export class ConnexionService {
  userconnect: UserConnect;
  user: User;
  code: Code;
  sreq: SearchReq;
  private headers = new Headers({'Content-Type': 'application/json'});
  private userUrlInscription = 'http://localhost:8080/users';
  private usersUrl = 'http://localhost:8080/users';
  private userUrlConnect = 'http://localhost:8080/users';
  private userUrlAddCode = 'http://localhost:8080/users';
  private userUrlGetCodes = 'http://localhost:8080';

  constructor(private http: Http) { }
  /*Inscription*/
  logUp(username, email, passeword){
    this.user = new User(username,email,passeword);
    console.log(JSON.stringify(this.user));
    this.http.post(this.userUrlInscription, JSON.stringify(this.user), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  /* Connexion*/
  logIn(username, passeword){
    this.userconnect = new UserConnect(username,passeword);
    console.log(JSON.stringify(this.userconnect));
    return this.http.post(this.userUrlConnect, JSON.stringify(this.userconnect), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }

  /* All users*/
  getUsers (): Observable<User[]> {
  return this.http.get(this.usersUrl)
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  /*Add Code*/
  addCode (codep,langage, tagsp){
    this.code = new Code(codep, langage, tagsp);
    console.log("le code "+JSON.stringify(this.code));
    return this.http.post(this.userUrlAddCode, JSON.stringify(this.code), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data)
    .catch(this.handleError);
  }
  /* add tags */

  /*Search for a code*/
  getCodes(searchreq){
    this.sreq = new SearchReq(searchreq);
    const url = this.userUrlGetCodes+'/'+JSON.stringify(this.sreq);
    console.log(url);
    return this.http.get('./assets/codes.json').map(
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
