import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hamburgur",
  templateUrl: "./hamburgur.component.html",
  styleUrls: ["./hamburgur.component.scss"],
})
export class HamburgurComponent {
  fillColor: string = "red";
  @Input() logoColor;

  setFillColor() {
    let styles = {
      fill: this.logoColor,
    };
    return styles;
  }
}
