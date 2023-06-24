import { Component, Input } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-hero-logos",
  templateUrl: "./hero-logos.component.html",
  styleUrls: ["./hero-logos.component.scss"],
})
export class HeroLogosComponent {
  @Input() colorofLogos;
  selectedTheme: any;
  constructor(private headerService: HeaderService) {}

  ngOnInit() {}
  setcolor() {
    let styles = {
      color: this.colorofLogos.color,
      height: "24px",
      width: "100%",
    };
    return styles;
  }
}
