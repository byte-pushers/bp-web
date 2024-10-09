import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-llnl-logo',
  templateUrl: './llnl-logo.component.html',
  styleUrls: [],
  standalone: true,
  imports: [NgStyle],
})
export class LLNLLogoComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: this.fillColor,
    };
    return styles;
  }
}
