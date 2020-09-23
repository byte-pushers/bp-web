import {Quote} from "../models/quote";
import {HttpClient} from "@angular/common/http";

export class quoteService {

  constructor(private http: HttpClient){
  }
  createQuote(quote: Quote): Quote;
}
