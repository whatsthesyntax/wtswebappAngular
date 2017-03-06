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

  public headers = new Headers({"Content-Type": "application/json"});
  public options = new RequestOptions({ headers: this.headers });
  /*URLs*/
  private userUrlGetCodes = 'http://localhost:8080/getCodes';
  private userUrlGetCodesByLangage = 'http://localhost:8080/getCodes';
  private userUrlDeleteCodePrive = 'http://localhost:8080/deleteCodes';

  constructor(private http: Http) { }

  /*Autorisation*/
  createAuthorizationHeader(headers: Headers, username: string, password: string) {
    headers.append('Authorization', 'Basic ' +
      btoa(username+':'+password));
  }

  /*Search for codes*/
  getCodes(searchreq:string){
    let url = this.userUrlGetCodes+'/'+searchreq;
    return this.http.get('./assets/codes.json')
    .map(
      (res) => res.json()
    );
  }

  /*Search for codes by langage*/
  getCodesByLangage(langage:string, searchreq:string){
    this.sreq = new SearchReq(searchreq, langage);
    let url = this.userUrlGetCodesByLangage+'/'+JSON.stringify(this.sreq);
    return this.http.get('./assets/codes.json')
    .map(
      (res) => res.json()
    );
  }

  /*supprimer un code privé*/
  deleteCodePrive(code, username: string, password: string){
    /*this.headers = new Headers({"Content-Type": "application/json"});
    this.createAuthorizationHeader(this.headers, username, password);
    return this.http.put(this.userUrlDeleteCodePrive, JSON.stringify(code), {headers:this.headers})
    .toPromise()
    .catch(this.handleError);*/
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
