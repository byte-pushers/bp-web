import { Component, OnDestroy, OnInit } from "@angular/core";
import landingPages from "../../landing-pages.json";
import { SiteMapService } from "src/app/services/sitemap.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-sitemap",
  templateUrl: "./sitemap.component.html",
  styleUrls: ["./sitemap.component.scss"],
})
export class SitemapComponent implements OnInit, OnDestroy {
  landingPagesList = landingPages;
  constructor(private siteMapService: SiteMapService, private router: Router) {}

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
}
