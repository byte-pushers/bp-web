import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ge-logo',
  templateUrl: './ge-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class GeLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
