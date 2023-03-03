import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser")!)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(loginReqObj: any) {
    localStorage.setItem("currentUser", JSON.stringify(loginReqObj));
    const user = localStorage.getItem("currentUser");
    this.currentUserSubject.next(user);
  }
}
