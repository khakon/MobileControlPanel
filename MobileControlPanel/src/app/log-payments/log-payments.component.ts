import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LogPaymentsHttpService } from '../log-payments.service';
import { HelpersService } from '../helpers.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/zip";
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-log-payments',
  templateUrl: './log-payments.component.html',
  styleUrls: ['./log-payments.component.css'],
  providers: [LogPaymentsHttpService, HelpersService],
  encapsulation: ViewEncapsulation.None
})
export class LogPaymentsComponent implements OnInit {

  payments: any[];
  countDay: number;
  loadingVisible: boolean = false;
  error: any;
  constructor(private servicePayments: LogPaymentsHttpService, private serviceHelpers: HelpersService) { }

  ngOnInit() {
    this.countDay = 0;
    this.refresh();
  }
  onRowPrepared(e): void {
    let item = e.appointmentData;
  }
  onToolbarPreparing(e): void {
    let toolbarItems = e.toolbarOptions.items;
    toolbarItems.push({
      widget: 'dxButton',
      options: { icon: 'pulldown', onClick: this.startRefresh.bind(this) },
      location: 'before'
    },
      {
        widget: 'dxButton',
        options: { icon: 'chevronleft', onClick: this.clickBackButton.bind(this) },
        location: 'before'
      },
      {
        widget: 'dxButton',
        options: { icon: 'chevronright', onClick: this.clickForwardButton.bind(this) },
        location: 'before'
      });
  };
  refresh(): void {
    this.loadingVisible = true;
    this.servicePayments.getPayments(this.countDay).subscribe(
      data => {
        this.payments = data;
        this.loadingVisible = false;
      },
      error => {
        this.error = error;
        console.log(error);
        this.loadingVisible = false;
      }
    );
  };
  startRefresh(): void {
    this.countDay = 0;
    this.refresh();
  };
  clickBackButton(): void {
    this.countDay++;
    this.refresh();
  };
  clickForwardButton(): void {
    this.countDay--;
    if (this.countDay < 0) this.countDay == 0;
    this.refresh();
  };
  customizeSum(data: any): any {
    return new HelpersService().numberWithSpaces(data.value);
  }
  ;
}
