
import { Injectable } from '@angular/core';
import { Quote } from '../models/quote';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, delay, mergeMap, retry, retryWhen, shareReplay } from 'rxjs/operators';
import { DelayedRetryOperator } from '../operators/delayed-retry/delayed-retry.operator';

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
    }).pipe(
      DelayedRetryOperator.operate(1000, 3),
      // catchError(() => EMPTY), // Not Sure why this line works for CP3 but not here.
      shareReplay()
    );
  }

}
