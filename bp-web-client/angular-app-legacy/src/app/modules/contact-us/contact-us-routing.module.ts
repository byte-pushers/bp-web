import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeactivateGuard } from "src/app/shared/guards/CanDeactivate.guard.service";
import { ContactUsComponent } from "./contact-us.component";

const routes: Routes = [
  {
    path: "",
    component: ContactUsComponent,
    canDeactivate: [DeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}
