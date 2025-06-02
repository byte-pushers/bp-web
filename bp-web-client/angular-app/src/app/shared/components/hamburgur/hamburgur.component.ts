import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  imports: [NgStyle],
  selector: "app-hamburgur",
  templateUrl: "./hamburgur.component.html",
  styleUrls: ["./hamburgur.component.scss"],
})
export class HamburgurComponent {
  fillColor: string = "red";
  @Input() menuColor: any;

  setFillColor() {
    let styles = {
      fill: this.menuColor,
    };
    return styles;
  }
}
