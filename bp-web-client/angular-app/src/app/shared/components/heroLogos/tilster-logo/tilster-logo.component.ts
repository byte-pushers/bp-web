import { Component, Input } from "@angular/core";

@Component({
  selector: "app-tilster-logo",
  templateUrl: "./tilster-logo.component.html",
  styleUrls: ["./tilster-logo.component.scss"],
})
export class TilsterLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
