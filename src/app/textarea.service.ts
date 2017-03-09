import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Code } from './code';

@Injectable()
export class TextareaService {

  public code:Code;
  public headers:Headers;
  public options:RequestOptions;


  /*Les URLs*/
  private userUrlAddCodePrive = 'http://vps381611.ovh.net:8080/WTSAPI/codes';
  constructor(private http: Http) { }

  /*Autorisation*/
  createAuthorizationHeader(headers: Headers, username:string, password:string) {
    headers.append('Authorization', 'Basic ' +
      btoa(username+':'+password));
  }
  /*Selection d'un text dans textarea*/
  selectText(elem){
    elem.focus();
    elem.select();
  }

  /*Sauvegarde des codes*/
  addCodePrive(code, username:string, password:string){
    this.headers = new Headers({"Content-Type": "application/json"});
    /*this.createAuthorizationHeader(this.headers, username, password);*/
    return this.http.post(this.userUrlAddCodePrive, JSON.stringify(code), {headers:this.headers})
    .toPromise()
    .catch(this.handleError);
  }

  /*Edition d'un code*/
  editionCodePrive(code, username:string, password:string){
    this.headers = new Headers({"Content-Type": "application/json"});
    /*this.headers = new Headers({"Content-Type": "application/json"});
    this.createAuthorizationHeader(this.headers, username, password);*/
    return this.http.put(this.userUrlAddCodePrive, JSON.stringify(code), {headers:this.headers})
    .toPromise()
    .catch(this.handleError);
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
