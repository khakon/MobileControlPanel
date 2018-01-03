import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";

@Injectable()
export class LogPaymentsHttpService {
  private baseUrl = 'api/LogPayments/';
  constructor(private http: Http) { }
  getPayments(countDay: number): Observable<any[]> {
    return this.http.get(this.baseUrl + countDay)
      .map(response => response.json())
      .catch((error: any) => { return Observable.throw(error); });

  }
}

