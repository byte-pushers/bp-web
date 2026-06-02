import { AfterViewInit, Component, HostListener, Inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { DOCUMENT, NgClass, NgIf, NgStyle } from '@angular/common';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { WINDOW } from '@services/windows/window';
import { Meta, Title } from '@angular/platform-browser';
import { CompaniesWeKeepComponent } from "@app/shared/components/companies-we-keep/companies-we-keep.component";
import { BPClassNames } from "@app/app.classnames";
import { DialogService } from "@app/services/dialog/dialog.service";
import { BpButtonComponent } from "@app/shared/components/bp-button/bp-button.component";
import { SelectDropdownComponent } from "@app/shared/components/select-dropdown/select-dropdown.component";
import { HeaderService } from "@app/shared/commonServices/header.service";

@Component({
  selector: "app-landing-page-bottom-layout",
  templateUrl: "./landing-page-bottom-layout.component.html",
  styleUrls: ["./landing-page-bottom-layout.component.scss"],
  imports: [RouterOutlet, NgClass, NgIf, SocialMediaComponent, NgStyle,
    CompaniesWeKeepComponent, BpButtonComponent, SelectDropdownComponent],
  standalone: true
})
export class LandingPageBottomLayoutComponent implements OnInit, AfterViewInit {
  @Input() image: any;
  @Input() contentTitle: any;
  @Input() slogan: any;
  @Input() theme: any;
  @Input() metaTags: any;
  isScrolled: boolean = false;
  screenWidth: any;

  BPClassNames = BPClassNames;
  @Input() heroContent: any;
  public borderVisible = false;

  constructor(
    private headerService: HeaderService,
    @Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document, private title: Title,
    private route: ActivatedRoute, private metaService: Meta, private dialog: DialogService) { }

  ngOnInit() {
    console.log(this.contentTitle)
    this.metaService?.addTags(this.metaTags);
    this.title.setTitle(this.contentTitle);
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.borderVisible = (/true/i).test(params?.['showBorders']);
      }
    });

    const theme = this.document.body.getAttribute("data-theme");
    this.document.body.setAttribute("data-layout", `${theme}-bottom`);
  }

  ngAfterViewInit() {

  }
  getCTA() {
    this.dialog.show()
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
  setThemeBGImg() {
    let styles = {
      background: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${this?.theme?.imagePath?.bottom}) center no-repeat`,
      "background-size": "cover",
    };
    return styles;
  }
  @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Perform actions based on the scroll event
    if (this.window.pageYOffset >= 10) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
  onResize(event: any) {
    this.screenWidth = this.window.innerWidth;
  }
  setScreenWidth() {
    this.screenWidth = this.window.innerWidth;
  }
  hideTill(till: any) {
    this.setScreenWidth()
    return this.screenWidth < till ? false : true;
  }

  showBorders(): string {
    let style = '';
    if (this.borderVisible) {
      style = 'showBorders'
    }
    return style;
  }
}
