import { Component } from "@angular/core";

@Component({
  selector: "app-logo-text-aside",
  templateUrl: "./logo-text-aside.component.html",
  styles: [``],
})
export class LogoTextAsideComponent {
  fillColor: string = "red";

  setWidthHeight() {
    let dimensions = {
      width: "22em",
      height: "11em",
    };
    return dimensions;
  }
  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
