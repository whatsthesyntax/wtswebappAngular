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

  /*URLs*/
  private userUrlGetCodes = 'http://localhost:8080/getCodes';

  constructor(private http: Http) { }
  /*Search for codes*/
  getCodes(searchreq:string){
    this.sreq = new SearchReq(searchreq);
    const url = this.userUrlGetCodes+'/'+searchreq;
    return this.http.get('./assets/codes.json')
    .map(
      (res) => res.json()
    );
  }
}
