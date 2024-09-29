import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-thomson-reuters-logo',
  templateUrl: './thomson-reuters-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class ThomsonReutersLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
