import {Injectable} from "@angular/core";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Quote} from "../models/quote";
import {Person} from "../models/person";
import {Company} from "../models/company";
import {QuoteDomain} from "../models/quote.domain";





@Injectable()

export class QuoteService implements Quote {

  quoteURL = 'api/v1/quotes';
  company: Company;
  contact: Person;

  getCompany() {
  }

  getContact() {
  }

  setCompany(company: Company) {
  }

  setContact(contact: Person) {
  }

  constructor(private http: HttpClient) {

  }

  createQuote(quote: Quote): Observable<Quote>{
    const quoteID = {
      id: this.generateId()
    };
return this.http.post<Quote>(this.quoteURL, quote[this.generateId()]);

  }

public generateId() {
  const idName = Math.floor(Math.random() * 999);
  return idName;
}
}
