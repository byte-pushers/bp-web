import { Component, Input } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-hero-logos",
  templateUrl: "./hero-logos.component.html",
  styleUrls: ["./hero-logos.component.scss"],
})
export class HeroLogosComponent {
  @Input() colorofLogos;
  selectedTheme: any;

  window = getWindow();
  document = getDocument();
  constructor(
    private headerService: HeaderService
  ) // @Inject(PLATFORM_ID) private platformId: any,
  // private windowRef: WindowRef
  {}

  ngOnInit() {}
  setcolor() {
    let styles = {
      color: this.colorofLogos.color,
      height: "24px",
      width: "100%",
    };
    return styles;
  }
  hideTill820() {
    // if (isPlatformBrowser(this.platformId)) {
    //   if (this.windowRef.nativeWindow.innerWidth <= 820) {
    //     return false;
    //   }
    //   return true;
    // } else {
    if (window.innerWidth <= 820) {
      return false;
    }
    return true;
    // }
  }
}
