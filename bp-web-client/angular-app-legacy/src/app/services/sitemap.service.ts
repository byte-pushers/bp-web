import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SiteMapService {
  private siteMap = new BehaviorSubject<boolean>(true); // {1}

  get isSiteMap() {
    return this.siteMap.asObservable(); // {2}
  }
  setSiteMap(val: boolean) {
    this.siteMap.next(val);
  }
}
