import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tilster-logo',
  templateUrl: './tilster-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class TilsterLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
