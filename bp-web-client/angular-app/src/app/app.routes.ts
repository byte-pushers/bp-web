import { Routes } from '@angular/router';
import { HomeComponent } from '@app/screens/home/home.component';
import { AboutUsComponent } from './screens/about-us/about-us.component';
import { ContactComponent } from './screens/contact/contact.component';
import { ServicesComponent } from './screens/services/services.component';
import { WorkComponent } from './screens/work/work.component';

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutUsComponent },
  { path: "services", component: ServicesComponent },
  { path: "contact", component: ContactComponent },
  { path: "work", component: WorkComponent },
];
