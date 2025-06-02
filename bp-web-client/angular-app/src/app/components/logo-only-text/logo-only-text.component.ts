import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  imports: [NgStyle],
  selector: "app-logo-only-text",
  templateUrl: "./logo-only-text.component.html",
  styles: [""],
})
export class LogoOnlyTextComponent {
  setWidthHeight() {
    let dimensions = {
      width: "220px",
      "padding-top": "0.5em",
      "margin-bottom": 0,
    };
    return dimensions;
  }
}
