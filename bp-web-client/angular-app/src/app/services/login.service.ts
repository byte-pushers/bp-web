import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  public currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
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
    return this.http
      .post<any>(`${environment.ENDPOINT}/login`, loginReqObj)
      .toPromise()
      .then((res) => console.log(res))
      .then((data) => {
        return data;
      });
  }
  logout() {
    localStorage.clear();
    this.currentUserSubject.next(null);
  }
}
