import { Component, Input } from "@angular/core";

@Component({
  selector: "app-landing-page-bottom-layout",
  templateUrl: "./landing-page-bottom-layout.component.html",
  styleUrls: ["./landing-page-bottom-layout.component.scss"],
})
export class LandingPageBottomLayoutComponent {
  @Input() image;
  @Input() title;
  @Input() slogan;
  wanttoLearnMore() {}
}
