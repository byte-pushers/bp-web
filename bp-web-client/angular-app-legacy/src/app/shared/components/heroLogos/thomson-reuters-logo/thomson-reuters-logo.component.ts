import { Component, Input } from "@angular/core";

@Component({
  selector: "app-thomson-reuters-logo",
  templateUrl: "./thomson-reuters-logo.component.html",
  styleUrls: ["./thomson-reuters-logo.component.scss"],
})
export class ThomsonReutersLogoComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor.color,
    };
    return styles;
  }
}
