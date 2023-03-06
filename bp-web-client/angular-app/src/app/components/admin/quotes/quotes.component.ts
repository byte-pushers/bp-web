import { Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";
import { ScrollToService } from "src/app/services/scroll-to.service";
import { environment } from "src/environments/environment";
import * as $ from "jquery";
import { Product } from "src/app/shared/models/address";
import { QuotesService } from "src/app/services/quotes.service";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.scss"],
})
export class QuotesComponent {
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  loading: boolean = false;
  constructor(
    private window: Window,
    private quotesService: QuotesService,
    public scrollToService: ScrollToService
  ) {}
  products: Product[];

  cols: any[];

  ngOnInit() {
    this.quotesService
      .getProductsSmall()
      .then((data) => (this.products = data));

    this.cols = [
      { field: "code", header: "Code" },
      { field: "name", header: "Name" },
      { field: "category", header: "Category" },
      { field: "quantity", header: "Quantity" },
    ];
  }
}
