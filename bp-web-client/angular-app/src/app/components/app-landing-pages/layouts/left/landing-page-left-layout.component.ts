import { Component, Input, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-landing-page-left-layout",
  templateUrl: "./landing-page-left-layout.component.html",
  styleUrls: ["./landing-page-left-layout.component.scss"],
  standalone: true
})
export class LandingPageLeftLayoutComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private metaService: Meta,
    private title: Title
  ) {}

  ngOnInit() {

  }

  showBorders(): boolean | void {
    let isBorders;
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorder'] == "true") {
        isBorders = params?.['showBorder'];
      }
    });
    return isBorders;
  }
}
