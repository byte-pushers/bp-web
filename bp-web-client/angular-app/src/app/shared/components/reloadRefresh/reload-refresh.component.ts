import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PLATFORM_ID, Inject } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { WindowRef } from "src/app/services/windowRef.service";
@Component({
  selector: "app-common-functionality",
  template: ` <p>common-functionality works!</p> `,
  styles: [],
})
export class ReloadRefreshComponent implements OnInit {
  constructor(
    public router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private windowRef: WindowRef
  ) {}
  // url=self ? this.router.url :urlToNavigateTo;
  ngOnInit(): void {}

  reloadComponent(self: boolean, urlToNavigateTo?: string) {
    //skipLocationChange:true means dont update the url to / when navigating
    console.log("Current route I am on:", this.router.url);
    const url = self ? this.router.url : urlToNavigateTo;
    this.router
      .navigateByUrl(`/${url}`, { skipLocationChange: true })
      .then(() => {
        this.router.navigate([`/${url}`]).then(() => {
          console.log(`After navigation I am on:${this.router.url}`);
        });
      });
  }

  reloadPage() {
    if (isPlatformBrowser(this.platformId)) {
      this.windowRef.nativeWindow.location.reload();
    } else {
      window.location.reload();
    }
  }
}
