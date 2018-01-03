import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";

@Injectable()
export class AppServicesService {
  private baseUrl = 'api/Services/';
  constructor(private http: Http) { }
  executeProcedure(name: string): Observable<any> {
    return this.http.get(this.baseUrl+name)
      .map(response => response.json())
      .catch((error: any) => { return Observable.throw(error); });
  }

}
