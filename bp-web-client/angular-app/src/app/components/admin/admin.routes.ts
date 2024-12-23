// import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { DashboardComponent } from "@admin/dashboard/dashboard.component";
// import { QuotesComponent } from "@admin/quotes/quotes.component";
import { CrmComponent } from '@admin/crm/crm.component';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "crm",
        pathMatch: "full",
      },
      /*{
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "quotes",
        component: QuotesComponent,
      },*/
      {
        path: "crm",
        component: CrmComponent,
      }
    ],
  },
];
