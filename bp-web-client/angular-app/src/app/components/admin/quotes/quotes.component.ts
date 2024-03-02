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
  showDetails: boolean = false;
  quotesList: Quote[] = [];
  selectedQuote: Quote;
  constructor(
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
      { width: "300px", field: "", header: "Company Name" },
      { width: "300px", field: "", header: "Contact Name" },
      { width: "300px", field: "", header: "Email" },
      { width: "300px", field: "", header: "Phone" },
      { width: "300px", field: "", header: "Website" },
      { width: "300px", field: "", header: "Platform" },
      { width: "300px", field: "", header: "Type" },
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
  showQuoteDetails(quote: Quote) {
    console.log(quote);
    this.showDetails = true;
    this.selectedQuote = quote;
  }
  deleteQuote(quote: Quote) {
    console.log(quote);
  }
}
