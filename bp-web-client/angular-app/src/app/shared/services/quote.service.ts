
import {Injectable} from "@angular/core";
import {Quote} from "../models/quote";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()

export class QuoteService {

  constructor(private http: HttpClient) {

  }

  createQuote(quote: Quote): Observable<Quote>{
    console.log(quote);
    const header: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');

    return this.http.post<Quote>(environment.QUOTE_SERVICE.API.HOST, quote.transformKeys(), {
      headers: header,
      responseType: 'json'
    });
  }
}
