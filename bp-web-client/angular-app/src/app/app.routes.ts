import { Routes } from '@angular/router';
import { AppHomeComponent } from '@components/app-home/app-home.component';
import { adminRoutes } from '@admin/admin.routes';

let appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: AppHomeComponent }
];

export const routes = appRoutes.concat(adminRoutes);
