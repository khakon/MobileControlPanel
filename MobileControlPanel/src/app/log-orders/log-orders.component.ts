import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogOrdersHttpService } from '../log-orders.service';
import { HelpersService } from '../helpers.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/zip";
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-log-orders',
  templateUrl: './log-orders.component.html',
  styleUrls: ['./log-orders.component.css'],
  providers: [LogOrdersHttpService, HelpersService],
  encapsulation: ViewEncapsulation.None
})
export class LogOrdersComponent implements OnInit {

  orders: any[];
  loadingVisible: boolean = false;
  error: any;
  constructor(private serviceOrders: LogOrdersHttpService, private serviceHelpers: HelpersService) { }

  ngOnInit() {
    this.refresh();
  }
  onRowPrepared(e): void {
    let item = e.appointmentData;
  }
  onToolbarPreparing(e): void {
    let toolbarItems = e.toolbarOptions.items;
    toolbarItems.push({
      widget: 'dxButton',
      options: { icon: 'pulldown', onClick: this.refresh.bind(this) },
      location: 'before'
    });
  }
  refresh(): void {
    this.loadingVisible = true;
    this.serviceOrders.getOrders().subscribe(
      data => {
        this.orders = data;
        this.loadingVisible = false;
      },
      error => {
        this.error = error;
        console.log(error);
        this.loadingVisible = false;
      }
    );
  }
  customizeSum(data: any): any {
    return new HelpersService().numberWithSpaces(data.value);
  }

}
