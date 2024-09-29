import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-va-logo',
  templateUrl: './va-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class VALogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
