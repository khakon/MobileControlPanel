import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersHttpService } from '../orders.service';
import { PaymentsHttpService } from '../payments.service';
import { DashboardHttpService } from '../dashboard.service';
import { HelpersService } from '../helpers.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/zip";
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [OrdersHttpService, PaymentsHttpService, DashboardHttpService, HelpersService],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  orders: any[];
  payments: any[];
  paysCount: any = 0;
  paysStringCount: any = 0;
  paysSum: any = 0;
  ordersStringCount: any = 0;
  ordersCount: any = 0;
  ordersSum: any = 0;
  loadingVisible: boolean = false;
  error: any;
  constructor(private serviceOrders: OrdersHttpService, private servicePayments: PaymentsHttpService, private serviceDashboard: DashboardHttpService, private serviceHelpers: HelpersService) { }

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
    Observable.zip(
      this.serviceOrders.getOrders(),
      this.servicePayments.getPayments(),
      this.serviceDashboard.getStats(),
    ).subscribe(([orders, payments, stats]) => {
      this.orders = orders;
      this.payments = payments;
      this.paysStringCount = stats.countPaysString;
      this.paysCount = stats.countPays;
      this.paysSum = stats.sumPays;
      this.ordersSum = stats.sumOrders;
      this.ordersStringCount = stats.countOrdersString;
      this.ordersCount = stats.countOrders;
      this.loadingVisible = false;
    },
      err => console.error(err));
  }
  customizeSum(data: any): any {
    return new HelpersService().numberWithSpaces(data.value);
  }

}
