import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avial-logo',
  templateUrl: './avial-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class AvialLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
