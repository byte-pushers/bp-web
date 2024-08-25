import { Component, Input } from "@angular/core";
import { NgStyle } from '@angular/common';

@Component({
  selector: "app-logo-text-bottom",
  standalone: true,
  templateUrl: "./logo-text-bottom.component.html",
  styles: [""],
  imports: [
    NgStyle
  ]
})
export class LogoTextBottomComponent {
  fillColor: string = "red";
  @Input() logoColor: string | undefined;

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
