import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/app-home/app-home.component";
import { AppLoginComponent } from "./components/app-login/app-login.component";
import { DeactivateGuard } from "./shared/guards/CanDeactivate.guard.service";
import { SitemapComponent } from "./components/sitemap/sitemap.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "admin-login", component: AppLoginComponent },
  { path: "sitemap", component: SitemapComponent },
  {
    path: "about",
    loadChildren: () =>
      import("./modules/about-us/about-us.module").then((m) => m.AboutUsModule),
  },
  {
    path: "work",
    loadChildren: () =>
      import("./modules/work/work.module").then((m) => m.WorkModule),
  },
  {
    path: "services",
    loadChildren: () =>
      import("./modules/services/services.module").then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./components/admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/contact-us/contact-us.module").then(
        (m) => m.ContactUsModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabledBlocking",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [HomeComponent];
