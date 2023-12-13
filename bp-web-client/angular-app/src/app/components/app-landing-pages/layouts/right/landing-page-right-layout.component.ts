import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-landing-page-right-layout",
  templateUrl: "./landing-page-right-layout.component.html",
  styleUrls: ["./landing-page-right-layout.component.scss"],
})
export class LandingPageRightLayoutComponent implements OnInit {
  @Input() image;
  @Input() contentTitle;
  @Input() slogan;
  @Input() theme;
  @Input() metaTags;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private metaService: Meta,
    private title: Title
  ) {}

  addMetaTags() {
    for (let metaTag of this.metaTags[0]) {
      this.metaService.addTag(metaTag);
    }
  }
  ngOnInit(): void {
    this.addMetaTags();
    this.title.setTitle(this.contentTitle);
    const x = this.metaService?.getTag("name='keywords'");
    console.log(x);
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
