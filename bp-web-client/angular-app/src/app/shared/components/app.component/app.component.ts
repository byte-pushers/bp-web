import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { GoogleTagManagerService } from "angular-google-tag-manager";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "angular-app";
  hubspotTrackingId:string;
  constructor() {
    this.hubspotTrackingId= environment.HUBSPOT_TRACKING_ID;
  }
  ngOnInit() {}
}
