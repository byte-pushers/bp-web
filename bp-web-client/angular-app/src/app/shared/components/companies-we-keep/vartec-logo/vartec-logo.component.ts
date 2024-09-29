import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vartec-logo',
  standalone: true,
  templateUrl: './vartec-logo.component.html',
  styleUrls: [],
  imports: [NgStyle],
})
export class VartecLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    console.log(this.fillColor);
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
