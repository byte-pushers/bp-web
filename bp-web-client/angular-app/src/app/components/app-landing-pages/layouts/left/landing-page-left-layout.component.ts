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
    private metaService: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle(this.contentTitle);
    this.metaService?.addTags(this.metaTags);
    this.metaService.addTags(this.metaTags);
    // just to retrive the tag
    // const x = this.metaService?.getTag("name='author'");
    // console.log(x);
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
