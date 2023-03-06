import { Component, ElementRef, ViewChild } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";
import { ScrollToService } from "src/app/services/scroll-to.service";
import { environment } from "src/environments/environment";
import * as $ from "jquery";
import { Product } from "src/app/shared/models/address";
import { QuotesService } from "src/app/services/quotes.service";
import { QuoteService } from "src/app/shared/services/quote.service";
import { Quote } from "src/app/shared/models/quote";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.scss"],
})
export class QuotesComponent {
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  loading: boolean = false;
  quotesList: Quote[] = [];
  constructor(
    private window: Window,
    private quotesService: QuotesService,
    public scrollToService: ScrollToService
  ) {}
  products: Product[];

  cols: any[];

  ngOnInit() {
    this.quotesService.getProductsSmall().then((res) => {
      console.log(res);
      this.quotesList = res;
    });

    this.cols = [
      { width: "200", field: "", header: "Company Name" },
      { width: "200", field: "", header: "Contact Name" },
      { width: "200", field: "", header: "Email" },
      { width: "200", field: "", header: "Phone" },
      { width: "200", field: "", header: "Website" },
      { width: "200", field: "", header: "Platform" },
      { width: "200", field: "", header: "Type" },
    ];

    // this.getQuotesList();
  }

  // to be continued
  // getQuotesList(){
  //   this.quotesService.getQuotesList().subscribe(
  //     (res) => {
  //       console.log(res);
  // this.quotesList = res.data;
  //     },
  //     (err) => {
  //       console.log(err);
  //     },
  //   )
  // }
}
