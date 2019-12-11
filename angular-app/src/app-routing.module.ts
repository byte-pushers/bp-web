import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./app/components/app-home/app-home.component";
import {AboutComponent} from "./app/components/app-about/app-about.component";
import {ContactComponent} from "./app/components/app-contact/app-contact.component";
import {WorkComponent} from "./app/components/app-work/app-work.component";
import {ServicesComponent} from "./app/components/app-services/app-services.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'work', component: WorkComponent},
  {path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [
  HomeComponent,
  AboutComponent,
  ContactComponent,
  WorkComponent,
  ServicesComponent
];
