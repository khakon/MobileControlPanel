import { Component } from '@angular/core';
import { AppServicesService } from './app-services.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import "rxjs/add/observable/zip";
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AppServicesService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Панель управления';
  popupVisibleUpload: boolean = false;
  popupVisibleUpdate: boolean = false;
  error: any;
  loadingVisible: boolean = false;
  constructor(private servicePayments: AppServicesService) { }

  upDate(): void {
    this.popupVisibleUpdate = true;
  }
  upLoad(): void {
    this.popupVisibleUpload = true;
  }
  updateButtonOptions = {
    text: "Обновить",
    type: "danger",
    onClick: this.confirmUpdate.bind(this)//() => notify("The delete button was clicked")
  };
  cancelUpdateButtonOptions = {
    text: "Отмена",
    type: "default",
    onClick: this.cancelUpdate.bind(this)//() => notify("The delete button was clicked")
  };
  cancelUpdate(): void {
    console.log('Cancel update');
    this.popupVisibleUpdate = false;
  }
  confirmUpdate(): void {
    this.popupVisibleUpdate = false;
    console.log('Update');
    this.loadingVisible = true;
    this.servicePayments.executeProcedure("UpdateOrders").subscribe(
      data => {
          this.loadingVisible = false;
          notify('Данные обновлены');
      },
        error => {
            notify(error);
            console.log(error);
            this.loadingVisible = false;
        }
    );
  }
  uploadButtonOptions = {
    text: "Выгрузить",
    type: "danger",
    onClick: this.confirmUpload.bind(this)//() => notify("The delete button was clicked")
  };
  cancelUploadButtonOptions = {
    text: "Отмена",
    type: "default",
    onClick: this.cancelUpload.bind(this)//() => notify("The delete button was clicked")
  };
  confirmUpload(): void {
    console.log('Upload');
    this.popupVisibleUpload = false;
    this.loadingVisible = true;
    this.servicePayments.executeProcedure("Upload").subscribe(
      data => {
        this.loadingVisible = false;
        notify('Документы перегружены');
      },
      error => {
        notify(error);
        console.log(error);
        this.loadingVisible = false;
      }
    );
  }
  cancelUpload(): void {
    console.log('Cancel upload');
    this.popupVisibleUpload = false;
  }
}
