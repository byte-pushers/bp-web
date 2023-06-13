import { Component } from "@angular/core";

@Component({
  selector: "app-logo-only-text",
  templateUrl: "./logo-only-text.component.html",
  styles: [""],
})
export class LogoOnlyTextComponent {
  setWidthHeight() {
    let dimensions = {
      width: "220px",
      height: "90px",
      "margin-left": "1em",
      "padding-top": "0.5em",
      "margin-bottom": 0,
    };
    return dimensions;
  }
}
