import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texas-instruments-logo',
  templateUrl: './texas-instruments-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class TexasInstrumentsLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
