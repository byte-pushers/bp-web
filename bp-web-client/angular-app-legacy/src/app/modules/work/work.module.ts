import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { WorkRoutingModule } from "./work-routing.module";
import { WorkComponent } from "./work.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [WorkComponent],
  imports: [CommonModule, WorkRoutingModule, SharedModule],
})
export class WorkModule {}
