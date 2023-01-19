import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { GoogleTagManagerService } from "angular-google-tag-manager";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-app";
  constructor(
    private router: Router,
    private gtmService: GoogleTagManagerService
  ) {}
  ngOnInit() {
    // push GTM data layer for every visited page
    this.router.events.forEach((item) => {
      if (item instanceof NavigationEnd) {
        const gtmTag = {
          event: "page",
          pageName: item.url,
        };
        this.gtmService.pushTag(gtmTag);
      }
    });
  }
  customEvent() {
    // push GTM data layer with a custom event
    const gtmTag = {
      event: "button-click",
      data: "my-custom-event",
    };
    this.gtmService.pushTag(gtmTag);

    alert("this is a custom event");
  }
}
