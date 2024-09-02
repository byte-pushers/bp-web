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
  #defaultDimension: {width: number, height: number} = {width: 130, height: 130};
  fillColor: string = "red";
  @Input() logoColor: string | undefined;
  @Input() dimension: {width: number, height: number} | undefined;

  setWidthHeight() {
    let dimensions = {
      width: this.dimension ? this.dimension.width + 'px' : this.#defaultDimension.width + 'px',
      height: this.dimension ? this.dimension.height + 'px' : this.#defaultDimension.height + 'px',
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
