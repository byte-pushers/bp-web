import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/app-home/app-home.component";
import { AboutComponent } from "./components/app-about/app-about.component";
import { ContactComponent } from "./components/app-contact/app-contact.component";
import { WorkComponent } from "./components/app-work/app-work.component";
import { ServicesComponent } from "./components/app-services/app-services.component";
import { AppLoginComponent } from "./components/app-login/app-login.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "work", component: WorkComponent },
  { path: "services", component: ServicesComponent },
  { path: "admin", component: AppLoginComponent },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./components/admin/admin.module").then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  WorkComponent,
  ServicesComponent,
];
