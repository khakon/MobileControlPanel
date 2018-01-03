import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PaymentsHttpService } from '../payments.service';
import { HelpersService } from '../helpers.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/zip";
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  providers: [PaymentsHttpService, HelpersService],
  encapsulation: ViewEncapsulation.None
})
export class PaymentsComponent implements OnInit {

  payments: any[];
  payment: any;
  loadingVisible: boolean = false;
  popupVisibleEdit: boolean = false;
  popupVisibleDelete: boolean = false;
  error: any;
  editActionOptions = {
    onClick: this.edit.bind(this)//() => notify("The edit button was clicked")
  };
  deleteActionOptions = {
    onClick: this.delete.bind(this)//() => notify("The delete button was clicked")
  };
  deleteButtonOptions = {
    text: "Удалить",
    type: "danger",
    onClick: this.confirmDelete.bind(this)//() => notify("The delete button was clicked")
  };
  cancelDeleteButtonOptions = {
    text: "Отмена",
    type: "default",
    onClick: this.cancelDelete.bind(this)//() => notify("The delete button was clicked")
  };
  saveButtonOptions = {
    text: "Записать",
    type: "success",
    onClick: this.confirmSave.bind(this)//() => notify("The delete button was clicked")
  };
  cancelSaveButtonOptions = {
    text: "Отменить",
    type: "default",
    onClick: this.cancelSave.bind(this)//() => notify("The delete button was clicked")
  };
  constructor(private servicePayments: PaymentsHttpService, private serviceHelpers: HelpersService) { }

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
    this.servicePayments.getPayments().subscribe(
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
  }

  edit(data: any) {
    this.loadingVisible = true;
    this.servicePayments.getPayment(data.id).subscribe(
      data => {
        this.payment = data;
        this.loadingVisible = false;
        this.popupVisibleEdit = true;
      },
      error => {
        this.error = error;
        notify(error);
        this.loadingVisible = false;
      }
    );
  };

  delete(data: any) {
    this.payment = data;
    this.popupVisibleDelete = true;

  }
  cancelDelete(): void { this.popupVisibleDelete = false; };
  confirmDelete(): void {
    this.loadingVisible = true;
    this.servicePayments.deletePayment(this.payment.id).subscribe(
        data => {
          this.payments = data;
            this.loadingVisible = false;
            this.popupVisibleDelete = false;
        },
        error => {
            this.error = error;
            notify(error);
            this.loadingVisible = false;
        }
    );
    this.popupVisibleDelete = false;
    notify('Оплата удалена');
  }
  cancelSave(): void { this.popupVisibleEdit = false; };
  confirmSave(): void {
    this.popupVisibleEdit = false;
    this.loadingVisible = true;
    this.servicePayments.savePayment(this.payment).subscribe(
      data => {
        this.payments = data;
        this.loadingVisible = false;
        notify('Оплата записана');
      },
      error => {
        this.error = error;
        notify(error);
        this.loadingVisible = false;
      }
    );
  }
  customizeSum(data: any): any {
    return new HelpersService().numberWithSpaces(data.value);
  }

}
