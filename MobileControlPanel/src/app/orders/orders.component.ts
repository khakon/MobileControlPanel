import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrdersHttpService } from '../orders.service';
import { HelpersService } from '../helpers.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/zip";
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersHttpService, HelpersService],
  encapsulation: ViewEncapsulation.None
})
export class OrdersComponent implements OnInit {

  orders: any[];
  loadingVisible: boolean = false;
  popupVisibleDelete: boolean = false;
  order: any;
  error: any;
  deleteActionOptions = {
    onClick: this.delete.bind(this)//() => notify("The delete button was clicked")
  };
  deleteButtonOptions = {
    text: "Удалить",
    type: "danger",
    onClick: this.confirmDelete.bind(this)//() => notify("The delete button was clicked")
  };
  cancelDeleteButtonOptions = {
    text: "Отменить",
    type: "default",
    onClick: this.cancelDelete.bind(this)//() => notify("The delete button was clicked")
  };
  constructor(private serviceOrders: OrdersHttpService, private serviceHelpers: HelpersService) { }

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
  delete(data: any) {
    this.order = data;
    this.popupVisibleDelete = true;

  }
  cancelDelete(): void { this.popupVisibleDelete = false; };
  confirmDelete(): void {
    this.popupVisibleDelete = false;
    this.loadingVisible = true;
    this.serviceOrders.deleteOrder(this.order.id).subscribe(
        data => {
            this.orders = data;
            this.loadingVisible = false;
            this.popupVisibleDelete = false;
        },
        error => {
            this.error = error;
            notify(error);
            this.loadingVisible = false;
        }
    );
    notify('Заказ удален');
  }
  customizeSum(data: any): any {
    return new HelpersService().numberWithSpaces(data.value);
  }
}
