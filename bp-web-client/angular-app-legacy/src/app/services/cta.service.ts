import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CTAService {
  public ctaReqObjSubject: BehaviorSubject<any>;
  public ctaReqObj: Observable<any>;

  constructor(private http: HttpClient) {
    this.ctaReqObjSubject = new BehaviorSubject<any>(null);
    this.ctaReqObj = this.ctaReqObjSubject.asObservable();
  }
}
