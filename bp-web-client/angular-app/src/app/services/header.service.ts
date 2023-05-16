import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  private themeColor = new BehaviorSubject<string>("#fff");
  currentThemeColor = this.themeColor.asObservable();

  /**
   *
   * @param {string}color
   */
  public setThemeColor(color: string) {
    this.themeColor.next(color);
  }
}
