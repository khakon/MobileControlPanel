import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OrdersComponent } from "./orders/orders.component";
import { PaymentsComponent } from "./payments/payments.component";
import { LogOrdersComponent } from "./log-orders/log-orders.component";
import { LogPaymentsComponent } from "./log-payments/log-payments.component";
const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "orders", component: OrdersComponent },
  { path: "payments", component: PaymentsComponent },
  { path: "logOrders", component: LogOrdersComponent },
  { path: "logPayments", component: LogPaymentsComponent },
  { path: "", component: DashboardComponent }]
export const RoutingConfig = RouterModule.forRoot(routes);
