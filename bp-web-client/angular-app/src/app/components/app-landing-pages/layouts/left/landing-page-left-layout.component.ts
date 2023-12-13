import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-landing-page-left-layout",
  templateUrl: "./landing-page-left-layout.component.html",
  styleUrls: ["./landing-page-left-layout.component.scss"],
})
export class LandingPageLeftLayoutComponent implements OnInit {
  @Input() image;
  @Input() contentTitle;
  @Input() slogan;
  @Input() theme;
  public ctaForm: FormGroup;
  @Input() metaTags: any;
  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    console.log(this.contentTitle);
    this.meta?.addTags(this.metaTags);
    this.title.setTitle(this.contentTitle);
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
      background: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${this?.theme?.imagePath?.left}) center no-repeat`,
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
