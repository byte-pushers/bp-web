import { Component, Input } from "@angular/core";

@Component({
  selector: "app-avial-logo",
  templateUrl: "./avial-logo.component.html",
  styleUrls: ["./avial-logo.component.scss"],
})
export class AvialLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
