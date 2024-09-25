import { Component, Input } from "@angular/core";

@Component({
  selector: "app-vartec-logo",
  templateUrl: "./vartec-logo.component.html",
  styleUrls: ["./vartec-logo.component.scss"],
})
export class VartecLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
