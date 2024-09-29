import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrow-bottom',
  templateUrl: './arrow-bottom.component.html',
  styleUrls: ['./arrow-bottom.component.scss'],
})
export class ArrowBottomComponent {
  @Input() fillColor: any;

  setFillColor() {
    let styles = {
      fill: 'none',
      stroke: this.fillColor,
      'stroke-width': 7,
      'stroke-miterlimit': 10,
    };
    return styles;
  }
}
