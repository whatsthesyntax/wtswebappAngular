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
  private userUrlDeleteCode = 'http://localhost:8080/deleteCodes';

  constructor(private http: Http) { }

  /*Autorisation*/
  createAuthorizationHeader(headers: Headers, username: string, password: string) {
    headers.append('Authorization', 'Basic ' +
      btoa(username+':'+password));
  }
  
  /*Search for codes*/
  getCodes(searchreq:string){
    this.sreq = new SearchReq(searchreq);
    const url = this.userUrlGetCodes+'/'+searchreq;
    return this.http.get('./assets/codes.json')
    .map(
      (res) => res.json()
    );
  }

  /*supprimer un code privé*/
  deleteCodePrive(codeId:number, userId:number){

  }
}
