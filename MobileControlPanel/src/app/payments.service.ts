import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/throw";

@Injectable()
export class PaymentsHttpService {
  private baseUrl = 'api/Payments/';
  constructor(private http: Http) { }
  getPayments(): Observable<any[]> {
    return this.http.get(this.baseUrl)
      .map(response => response.json())
      .catch((error: any) => { return Observable.throw(error); });
  }
  getPayment(id: number): Observable<any> {
    return this.http.get(this.baseUrl+id)
      .map(response => response.json())
      .catch((error: any) => { return Observable.throw(error); });
  }
  savePayment(item: any): Observable<any[]> {
    var url = this.baseUrl;
    return this.http.post(this.baseUrl, JSON.stringify(item), this.getRequestOptions())
      .map((resp: Response) => {
        return resp.json();
      })
      .catch((error: any) => { return Observable.throw(error); });
  }
  deletePayment(id: number): Observable<any[]> {
    console.log(id);
    var url = this.baseUrl + id;
    return this.http.delete(url, new RequestOptions())
      .map((resp: Response) => {
        return resp.json();
      })
      .catch((error: any) => { return Observable.throw(error); });
  }
  // returns a viable RequestOptions object to handle Json requests
  private getRequestOptions() {
    return new RequestOptions({
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
  }

}
