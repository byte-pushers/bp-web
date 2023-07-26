import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { SiteMapService } from "src/app/services/sitemap.service";
import { DEVICE_PLATFORM } from "../../models/screen-size.enum";
import { ResizeService } from "../../services/resize.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "angular-app";
  isSiteMap$: Observable<boolean>;
  constructor(
    private siteMapService: SiteMapService,
    private resizeService: ResizeService
  ) {}

  @HostListener("window:resize", [])
  private onResize() {
    this.#detectScreenSize();
  }

  ngOnInit() {
    this.isSiteMap$ = this.siteMapService.isSiteMap;
  }

  ngAfterViewInit() {
    this.#detectScreenSize();
  }

  #detectScreenSize() {
    if (window.innerWidth <= 820) {
      this.resizeService.onResize(DEVICE_PLATFORM.MOBILE);
    } else if (window.innerWidth < 1280) {
      this.resizeService.onResize(DEVICE_PLATFORM.TABLET);
    } else {
      this.resizeService.onResize(DEVICE_PLATFORM.DESKTOP);
    }
  }
}
