import { Component, OnDestroy, OnInit } from "@angular/core";
import landingPages from "../../landing-pages.json";
import { SiteMapService } from "src/app/services/sitemap.service";
import { Router } from "@angular/router";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-sitemap",
  templateUrl: "./sitemap.component.html",
  styleUrls: ["./sitemap.component.scss"],
})
export class SitemapComponent implements OnInit, OnDestroy {
  landingPagesList = landingPages;
  window = getWindow();
  document = getDocument();
  constructor(
    private siteMapService: SiteMapService,
    private router: Router
  ) // @Inject(PLATFORM_ID) private platformId: any,
  // private windowRef: WindowRef
  {}

  ngOnInit() {
    this.siteMapService.setSiteMap(false);
  }
  ngOnDestroy() {
    this.siteMapService.setSiteMap(true);
  }
  gotothisroute(page: string, layoutId: number, layoutType?: any) {
    if (layoutType != undefined) {
      this.router.navigate([page], {
        queryParams: { id: layoutId, layout: layoutType },
      });
    } else {
      this.router.navigate([page], { queryParams: { id: layoutId } });
    }
  }

  showSmallLogo() {
    // if (isPlatformBrowser(this.platformId)) {
    //   if (this.windowRef.nativeWindow.innerWidth <= 960) {
    //     return true;
    //   }
    //   return false;
    // } else {
    if (window.innerWidth <= 960) {
      return true;
    }
    return false;
    // }
  }
}
