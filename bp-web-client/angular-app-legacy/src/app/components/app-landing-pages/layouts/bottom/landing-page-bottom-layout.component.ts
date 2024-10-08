import { Component, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BytePushersPopupService } from "src/app/modules/popup-modal/services/bytepushers-popup.service";
import { CTAService } from "src/app/services/cta.service";
import { HeaderService } from "src/app/services/header.service";

import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-landing-page-bottom-layout",
  templateUrl: "./landing-page-bottom-layout.component.html",
  styleUrls: ["./landing-page-bottom-layout.component.scss"],
})
export class LandingPageBottomLayoutComponent {
  @Input() image: any;
  @Input() contentTitle: any;
  @Input() slogan: any;
  @Input() theme: any;
  @Input() metaTags: any;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private ctaService: CTAService,
    private bpPopupService: BytePushersPopupService,
    private metaService: Meta,
    private title: Title
  ) {}
  ngOnInit() {
    this.metaService?.addTags(this.metaTags);
    this.title.setTitle(this.contentTitle);
    this.headerService.setTheme({
      logoColor: this?.theme?.mainLogoColor,
      NavColor: this?.theme?.titleColor,
    });
  }

  wanttoLearnMore() {
    this.ctaService.ctaReqObjSubject.next("bottomLayout");
    this.bpPopupService.isBPpopupOpenSubject.next(true);
  }

  setTitleColor() {
    let styles = {
      color: this?.theme?.titleColor,
      "font-weight": "300",
    };
    this.headerService.setTheme(
      {
        logoColor: this?.theme?.mainLogoColor,
        NavColor: this?.theme?.titleColor,
      },
      "bottom"
    );
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
