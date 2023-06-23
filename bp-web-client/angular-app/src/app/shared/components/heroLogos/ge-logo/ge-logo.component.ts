import { Component, Input } from "@angular/core";

@Component({
  selector: "app-ge-logo",
  templateUrl: "./ge-logo.component.html",
  styleUrls: ["./ge-logo.component.scss"],
})
export class GeLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
