import { Component, OnDestroy, OnInit } from "@angular/core";
import * as $ from "jquery";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { SiteMapService } from "src/app/services/sitemap.service";
@Component({
  selector: "app-sitemap",
  templateUrl: "./sitemap.component.html",
  styleUrls: ["./sitemap.component.scss"],
})
export class SitemapComponent implements OnInit, OnDestroy {
  constructor(private siteMapService: SiteMapService) {}

  ngOnInit() {
    this.siteMapService.setSiteMap(false);
  }
  ngOnDestroy() {
    this.siteMapService.setSiteMap(true);
  }
}
