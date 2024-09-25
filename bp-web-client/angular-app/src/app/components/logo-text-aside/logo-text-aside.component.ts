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
  #defaultDimension: {width: number, height: number} = {width: 22, height: 11};
  fillColor: string = "red";
  @Input() logoColor: string | undefined;
  @Input() dimension: {width: number, height: number} | undefined;

  setWidthHeight() {
    let dimensions = {
      width: this.dimension ? this.dimension.width + 'em' : this.#defaultDimension.width + 'em',
      height: this.dimension ? this.dimension.height + 'em' : this.#defaultDimension.height + 'em',
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
