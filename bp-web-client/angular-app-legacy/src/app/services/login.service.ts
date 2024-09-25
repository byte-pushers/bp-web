import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { getWindow, getDocument } from "ssr-window";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  window = getWindow();
  document = getDocument();
  constructor() {
    if (
      this.window.localStorage?.getItem("currentUser")! &&
      this.window.localStorage?.getItem("currentUser")! !== undefined
    ) {
      this.currentUserSubject = new BehaviorSubject<any>(
        JSON.parse(this.window.localStorage?.getItem("currentUser")!)
      );
    }
    this.currentUser = this.currentUserSubject?.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(loginReqObj: any) {
    this.window.localStorage?.setItem(
      "currentUser",
      JSON.stringify(loginReqObj)
    );
    const user = this.window.localStorage?.getItem("currentUser");
    this.currentUserSubject.next(user);
  }
  logout() {
    this.window.localStorage?.clear();
    this.currentUserSubject.next(null);
  }
}
