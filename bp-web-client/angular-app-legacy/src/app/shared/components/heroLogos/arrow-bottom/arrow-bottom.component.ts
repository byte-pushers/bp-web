import { Component, Input } from "@angular/core";

@Component({
  selector: "app-arrow-bottom",
  templateUrl: "./arrow-bottom.component.html",
  styleUrls: ["./arrow-bottom.component.scss"],
})
export class ArrowBottomComponent {
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: "none",
      stroke: this.logoColor.color,
      "stroke-width": 7,
      "stroke-miterlimit": 10,
    };
    return styles;
  }
}
