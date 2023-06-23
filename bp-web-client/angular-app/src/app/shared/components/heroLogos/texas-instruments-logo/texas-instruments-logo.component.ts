import { Component, Input } from "@angular/core";

@Component({
  selector: "app-texas-instruments-logo",
  templateUrl: "./texas-instruments-logo.component.html",
  styleUrls: ["./texas-instruments-logo.component.scss"],
})
export class TexasInstrumentsLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
