import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { QuotesComponent } from "./quotes/quotes.component";
import { QuotesService } from "src/app/services/quotes.service";
import { TableModule } from "primeng/table";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminRoutingModule } from "./admin.routing.module";
import { AdminComponent } from "./admin.component";
import { DialogModule } from "primeng/dialog";

@NgModule({
  declarations: [AdminComponent, QuotesComponent, DashboardComponent],
  imports: [CommonModule, TableModule, AdminRoutingModule, DialogModule],
  exports: [RouterModule],
  providers: [QuotesService],
})
export class AdminModule {}
