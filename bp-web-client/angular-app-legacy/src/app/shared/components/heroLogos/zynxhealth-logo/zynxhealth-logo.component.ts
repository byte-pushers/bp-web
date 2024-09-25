import { Component, Input } from "@angular/core";

@Component({
  selector: "app-zynxhealth-logo",
  templateUrl: "./zynxhealth-logo.component.html",
  styleUrls: ["./zynxhealth-logo.component.scss"],
})
export class ZynxhealthLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
