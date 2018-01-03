import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { DxDataGridModule, DxButtonModule, DxLoadPanelModule, DxPopupModule, DxSelectBoxModule, DxTextAreaModule, DxFormModule, DxSchedulerModule, DxTemplateModule, DxChartModule, } from 'devextreme-angular';

import { RoutingConfig } from "./app.routing";
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentsComponent } from './payments/payments.component';
import { LogOrdersComponent } from './log-orders/log-orders.component';
import { LogPaymentsComponent } from './log-payments/log-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrdersComponent,
    PaymentsComponent,
    LogOrdersComponent,
    LogPaymentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    RoutingConfig,
    DxButtonModule,
    DxDataGridModule,
    DxLoadPanelModule,
    DxPopupModule,
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule,
    DxTemplateModule,
    DxSchedulerModule,
    DxChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
