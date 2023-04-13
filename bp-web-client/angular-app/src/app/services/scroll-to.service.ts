import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ScrollToService {
  public thankyouPage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}
  get isthankyouPage() {
    return this.thankyouPage.asObservable();
  }
  stickHeaderToTop(flag: any) {
    this.thankyouPage.next(flag);
  }
  public toTopOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
