import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-info",
  templateUrl: "./app-info.component.html",
  styleUrls: ["./app-info.component.css"],
})
export class InfoComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  public toFeaturesSection() {
    window.scrollTo(0, 900);
  }
}
