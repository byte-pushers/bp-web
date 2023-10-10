import { Injectable } from "@angular/core";
import { getWindow, getDocument } from "ssr-window";

@Injectable({
  providedIn: "root",
})
export class ScrollToService {
  window = getWindow();
  document = getDocument();
  constructor() {}

  public toTopOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
