import { Component, OnInit } from "@angular/core";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
@Component({
  selector: "app-info",
  templateUrl: "./app-info.component.html",
  styleUrls: ["./app-info.component.css"],
})
export class InfoComponent implements OnInit {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef
  ) {}
  ngOnInit() {}

  public toFeaturesSection() {
    if (!isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 900);
    }
  }
}
