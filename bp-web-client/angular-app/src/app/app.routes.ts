import { Routes } from '@angular/router';
import { AppHomeComponent } from '@components/app-home/app-home.component';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: AppHomeComponent }
];
