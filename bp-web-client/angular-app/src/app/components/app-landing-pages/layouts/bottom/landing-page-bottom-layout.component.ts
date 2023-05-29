import { Component, Input } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-landing-page-bottom-layout",
  templateUrl: "./landing-page-bottom-layout.component.html",
  styleUrls: ["./landing-page-bottom-layout.component.scss"],
})
export class LandingPageBottomLayoutComponent {
  @Input() image;
  @Input() title;
  @Input() slogan;
  @Input() theme;

  constructor(private headerService: HeaderService) {}
  wanttoLearnMore() {}

  setTitleColor() {
    let styles = {
      color: this?.theme?.titleColor,
    };
    this.headerService.setTheme({
      logoColor: this?.theme?.secondaryColor,
      NavColor: this?.theme?.titleColor,
    });
    return styles;
  }
  setThemePrimaryColor() {
    let styles = {
      color: this?.theme?.primaryColor,
    };
    return styles;
  }
  setThemeSecondaryColor() {
    let styles = {
      color: this?.theme?.secondaryColor,
    };
    return styles;
  }
  setThemeBGImg() {
    let styles = {
      background: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${this?.theme?.imagePath?.bottom}) center no-repeat`,
      "background-size": "cover",
    };
    return styles;
  }
}
