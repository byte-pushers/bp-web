import { Component, Input } from "@angular/core";

@Component({
  selector: "app-logo-text-bottom",
  templateUrl: "./logo-text-bottom.component.html",
  styles: [""],
})
export class LogoTextBottomComponent {
  fillColor: string = "red";
  @Input() logoColor;

  setWidthHeight() {
    let dimensions = {
      width: "130px",
      height: "130px",
    };
    return dimensions;
  }
  setFillColor() {
    let styles = {
      fill: this.logoColor,
    };
    return styles;
  }
}
