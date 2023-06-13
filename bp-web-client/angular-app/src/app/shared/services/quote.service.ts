import { Injectable } from "@angular/core";
import { Quote } from "../models/quote";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EMPTY, Observable, of, throwError } from "rxjs";
import {
  catchError,
  delay,
  map,
  mergeMap,
  retry,
  retryWhen,
  shareReplay,
} from "rxjs/operators";
import { DelayedRetryOperator } from "../operators/delayed-retry/delayed-retry.operator";

@Injectable()
export class QuoteService {
  apiEndPoint = environment.QUOTE_SERVICE.API.HOST;
  constructor(private http: HttpClient) {}

  createQuote(quote: Quote): Observable<Quote> {
    const header: HttpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    const payload = quote.transformKeys();
    return this.http
      .post<Quote>(environment.QUOTE_SERVICE.API.HOST, payload, {
        headers: header,
        responseType: "json",
      })
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  getQuotesList(): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}`);
  }
}
