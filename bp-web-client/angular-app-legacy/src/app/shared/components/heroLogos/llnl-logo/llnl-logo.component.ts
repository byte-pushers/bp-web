import { Component, Input } from "@angular/core";

@Component({
  selector: "app-llnl-logo",
  templateUrl: "./llnl-logo.component.html",
  styleUrls: ["./llnl-logo.component.scss"],
})
export class LLNLLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
