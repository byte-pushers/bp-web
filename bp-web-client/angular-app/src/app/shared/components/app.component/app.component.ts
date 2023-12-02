import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from "@angular/core";
import { Observable } from "rxjs";
import { SiteMapService } from "src/app/services/sitemap.service";
import { DEVICE_PLATFORM } from "../../models/screen-size.enum";
import { ResizeService } from "../../services/resize.service";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
import { getWindow, getDocument } from "ssr-window";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "angular-app";
  isSiteMap$: Observable<boolean> = this.siteMapService.isSiteMap;
  isSiteMap = false;

  window = getWindow();
  document = getDocument();
  constructor(
    private siteMapService: SiteMapService,
    private resizeService: ResizeService,
    private cd: ChangeDetectorRef
  ) // @Inject(PLATFORM_ID) private platformId: any,
  // private windowRef: WindowRef
  {}

  @HostListener("window:resize", [])
  private onResize() {
    this.#detectScreenSize();
  }

  ngOnInit() {
    this.isSiteMap$.subscribe((isSiteMap) => {
      this.isSiteMap = isSiteMap;
      this.cd.detectChanges();
    });
  }

  ngAfterViewInit() {
    this.#detectScreenSize();
  }
  public windowWidth;
  setWindowCheck() {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.windowWidth = this.windowRef.nativeWindow.innerWidth;
    // } else {
    this.windowWidth = window.innerWidth;
    // }
  }
  #detectScreenSize() {
    if (this.windowWidth <= 820) {
      this.resizeService.onResize(DEVICE_PLATFORM.MOBILE);
    } else if (this.windowWidth < 1280) {
      this.resizeService.onResize(DEVICE_PLATFORM.TABLET);
    } else {
      this.resizeService.onResize(DEVICE_PLATFORM.DESKTOP);
    }
  }
}
