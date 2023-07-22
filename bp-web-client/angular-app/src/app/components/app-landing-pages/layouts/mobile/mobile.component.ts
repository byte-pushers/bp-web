import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BytePushersPopupService } from "src/app/modules/popup-modal/services/bytepushers-popup.service";
import { CTAService } from "src/app/services/cta.service";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-mobile",
  templateUrl: "./mobile.component.html",
  styleUrls: ["./mobile.component.scss"],
})
export class MobileComponent {
  @Input() image;
  @Input() title;
  @Input() slogan;
  @Input() theme;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private ctaService: CTAService,
    private bpPopupService: BytePushersPopupService
  ) {}
  wanttoLearnMore() {
    this.ctaService.ctaReqObjSubject.next("bottomLayout");
    this.bpPopupService.isBPpopupOpenSubject.next(true);
  }

  setTitleColor() {
    let styles = {
      color: this?.theme?.titleColor,
      "font-weight": "200",
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
  showBorders(): boolean | void {
    let isBorders;
    this.route.queryParams.subscribe((params) => {
      if (params?.showBorder == "true") {
        isBorders = params?.showBorder;
      }
    });
    return isBorders;
  }
}