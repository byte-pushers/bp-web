import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { QuotesComponent } from "./quotes/quotes.component";
import { ProductService } from "src/app/services/quotes.service";
import { TableModule } from "primeng/table";

const routes: Routes = [
  // { path: "", redirectTo: "/quotes", pathMatch: "full" },
  { path: "", component: QuotesComponent },
];

@NgModule({
  declarations: [QuotesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), TableModule],
  exports: [RouterModule],
  providers: [ProductService],
})
export class AdminModule {}
