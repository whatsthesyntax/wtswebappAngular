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
  userconnect: UserConnect;
  user: User;
  code: Code;
  sreq: SearchReq;
  tag: Tag;
  /*Autorisation*/
  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password'));
  }
  public userUrlInscription = 'http://vps381611.ovh.net:8080/WTSAPI/users';
  private usersUrl = 'http://localhost:8080/users';
  /*A faire*/
  private userUrlConnect = 'http://vps381611.ovh.net:8080/WTSAPI/connexion';
  private userUrlAddCode = 'http://localhost:8080/addCode';
  private userUrlAddTag = 'http://localhost:8080/addTag';
  private userUrlGetCodes = 'http://localhost:8080/getCodes';
  private userUrlGetMesCodes = 'http://localhost:8080/getCodes';
  private userUrlGetMesLangages = 'http://localhost:8080/getCodes';
  headers = new Headers({"Content-Type": "application/json"});
  options = new RequestOptions({ headers: this.headers });
  constructor(private http: Http) { }
  /*Inscription*/
  logUp(username, email, passeword){
    this.user = new User(username,email,passeword);
    return this.http.post(this.userUrlInscription, JSON.stringify(this.user), {headers:this.headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /* Connexion*/
  logIn(username, passeword){
    this.userconnect = new UserConnect(username,passeword);
    return this.http.post(this.userUrlConnect, JSON.stringify(this.userconnect))
        .map((response: Response) => {
            // login successful if there's a jwt token in the response
            let user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
  }

  /* All users*/
  getUsers (): Observable<User[]> {
  return this.http.get(this.userUrlInscription, {headers:this.headers})
                  .map(this.extractData)
                  .catch(this.handleError);
  }

  /*Add Code*/
  addCode (codep, langage, tagsp:string[]){
    for(var t of tagsp){
      this.code = new Code(codep, langage, t);
      this.http.post(this.userUrlAddCode, JSON.stringify(this.code), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }
  }
  /*Search for a code*/
  getCodes(searchreq:string){
    this.sreq = new SearchReq(searchreq);
    const url = this.userUrlGetCodes+'/'+searchreq;
    console.log(url);
    return this.http.get('./assets/codes.json').map(
      (res) => res.json()
    );
  }
  /*Mes codes sauvegarder*/
  getMesCodes(){
    return this.http.get('./assets/mescodes.json').map(
      (res) => res.json()
    );
  }
  /*Mes langages*/
  getMesLangages(){
    return this.http.get('./assets/langages.json').map(
      (res) => res.json()
    );
  }
  /*Get code langage Java*/
  getCodeJava(){
    return this.http.get('./assets/codejava.json').map(
      (res) => res.json()
    );
  }

  /*Get code langage C#*/
  getCodeCsharp(){
    return this.http.get('./assets/codecsharp.json').map(
      (res) => res.json()
    );
  }

  /*Get code langage php*/
  getCodePhp(){
    return this.http.get('./assets/codephp.json').map(
      (res) => res.json()
    );
  }

  /*Get all langage all tags*/
  getLangagesTags(){
    return this.http.get('./assets/tagslangages.json').map(
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
