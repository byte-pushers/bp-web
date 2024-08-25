import { Component, Input } from "@angular/core";
import { NgStyle } from '@angular/common';

@Component({
  selector: "app-logo-text-aside",
  standalone: true,
  templateUrl: "./logo-text-aside.component.html",
  styles: [``],
  imports: [
    NgStyle
  ]
})
export class LogoTextAsideComponent {
  fillColor: string = "red";
  @Input() logoColor: string | undefined;

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
