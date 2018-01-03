import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";

@Injectable()
export class DashboardHttpService {
  private baseUrl = 'api/Dashboard/';
  constructor(private http: Http) { }
  getStats(): Observable<any> {
    return this.http.get(this.baseUrl)
      .map(response => response.json())
      .catch((error: any) => { return Observable.throw(error); });
  }
}
