import { Injectable } from '@angular/core';

@Injectable()
export class HelpersService {

  constructor() { }
  numberWithSpaces(x:any): any {
    try {
      var parts = Number((x).toFixed(2)).toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    }
    catch (err) {
      console.log(x);
      return '';
    }

  }

}
