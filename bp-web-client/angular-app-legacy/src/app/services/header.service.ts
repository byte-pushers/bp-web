import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private theme = new BehaviorSubject<any>({
    logoColor: "#fff",
    NavColor: "#fff",
  });
  currentTheme = this.theme.asObservable();

  /**
   *
   * @param {string}color
   */
  public setTheme(selectedTheme: any, from?: any) {
    this.theme.next(selectedTheme);
  }
}
