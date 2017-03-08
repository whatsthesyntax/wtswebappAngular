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
export class CodesService {
  /*Atrributs*/
  sreq: SearchReq;
  code: Code;

  public headers = new Headers({"Content-Type": "application/json"});
  public options = new RequestOptions({ headers: this.headers });
  /*URLs*/
  private userUrlGetCodes = 'http://vps381611.ovh.net:8080/WTSAPI/codes';
  private userUrlDeleteCodePrive = 'http://localhost:8080/deleteCodes';
  private userUrlAddCode = 'http://vps381611.ovh.net:8080/WTSAPI/codes';
  private userUrlGetMesCodes = 'http://vps381611.ovh.net:8080/WTSAPI/users/usercodes';
  private userUrlGetMesLangages = 'http://vps381611.ovh.net:8080/WTSAPI/users/userlanguages';

  constructor(private http: Http) { }

  /*Autorisation*/
  createAuthorizationHeader(headers: Headers, username: string, password: string) {
    headers.append('Authorization', 'Basic ' +
      btoa(username+':'+password));
  }

  /*Search for codes*/
  getCodes(searchreq:string){
    let url = this.userUrlGetCodes+'/'+searchreq;
    let headers = new Headers({"Content-Type": "text/plain"});
    return this.http.get(url, {headers: headers})
    .map(
      (res) => res.json()
    );
  }

  /*Search for codes by langage*/
  getCodesByLangage(langage:string, searchreq:string){
    let url = this.userUrlGetCodes+'/'+langage+" "+searchreq;
    let headers = new Headers({"Content-Type": "text/plain"});
    return this.http.get(url, {headers: headers})
    .map(
      (res) => res.json()
    );
  }

  /*supprimer un code privé*/
  deleteCodePrive(code, username: string, password: string){
    /*A decomenter pour tester*/
    /*this.headers = new Headers({"Content-Type": "application/json"});
    this.createAuthorizationHeader(this.headers, username, password);*/
    return this.http.put(this.userUrlDeleteCodePrive, JSON.stringify(code), {headers:this.headers})
    .toPromise()
    .catch(this.handleError);
  }



  /*Add Code*/
  addCode (code){
      return this.http.post(this.userUrlAddCode, JSON.stringify(code), {headers: this.headers})
      .toPromise()
      .catch(this.handleError);
  }

  /*Mes codes sauvegarder*/
  getMesCodes(userId:number){
    /*this.headers = new Headers({"Content-Type": "application/json"});
    this.createAuthorizationHeader(this.headers, user.name, user.password);*/
    let url = this.userUrlGetMesCodes+'/'+userId;
    /*Remplacer avec l'url api et les options {headers: this.headers}*/
    return this.http.get(url).map(
      (res) => res.json()
    );
  }
  /*Mes langages*/
  getMesLangages(userId:number){
    /*this.headers = new Headers({"Content-Type": "application/json"});
    this.createAuthorizationHeader(this.headers, user.name, user.password);*/
    let url = this.userUrlGetMesLangages+'/'+userId;
    return this.http.get(url).map(
      (res) => res.json()
    );
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
