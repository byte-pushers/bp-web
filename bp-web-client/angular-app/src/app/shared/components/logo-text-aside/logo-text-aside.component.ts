import { Component, Input } from "@angular/core";

@Component({
  selector: "app-logo-text-aside",
  templateUrl: "./logo-text-aside.component.html",
  styles: [``],
})
export class LogoTextAsideComponent {
  fillColor: string = "red";
  @Input() logoColor;

  setWidthHeight() {
    let dimensions = {
      width: "22em",
      height: "11em",
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
