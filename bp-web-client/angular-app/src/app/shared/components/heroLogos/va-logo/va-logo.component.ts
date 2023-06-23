import { Component, Input } from "@angular/core";

@Component({
  selector: "app-va-logo",
  templateUrl: "./va-logo.component.html",
  styleUrls: ["./va-logo.component.scss"],
})
export class VALogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
