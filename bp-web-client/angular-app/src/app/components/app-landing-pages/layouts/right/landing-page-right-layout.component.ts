import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-landing-page-right-layout",
  templateUrl: "./landing-page-right-layout.component.html",
  styleUrls: ["./landing-page-right-layout.component.scss"],
})
export class LandingPageRightLayoutComponent {
  @Input() image;
  @Input() title;
  @Input() slogan;
  @Input() theme;
  public ctaForm: FormGroup;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute
  ) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [Validators.required]),
      ctaEmail: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onCTASubmit() {
    let ctaReqObj = {
      Name: this?.ctaForm?.controls["ctaName"]?.value,
      Email: this?.ctaForm?.controls["ctaEmail"]?.value,
    };
    console.log(ctaReqObj);
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
      background: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${this?.theme?.imagePath?.right}) center no-repeat`,
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