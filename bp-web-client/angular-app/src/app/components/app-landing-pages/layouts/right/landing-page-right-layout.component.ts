import { Component, HostListener, Inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { DOCUMENT, NgClass, NgIf, NgStyle } from '@angular/common';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { WINDOW } from '@services/windows/window';
import { Meta, Title } from '@angular/platform-browser';
import { CompaniesWeKeepComponent } from "@app/shared/components/companies-we-keep/companies-we-keep.component";
import { BPClassNames } from '@app/app.classnames'
import { InlineCTAComponent } from "@app/shared/components/inline-cta/inline-cta.component";

@Component({
  selector: "app-landing-page-right-layout",
  templateUrl: "./landing-page-right-layout.component.html",
  styleUrls: ["./landing-page-right-layout.component.scss"],
  imports: [RouterOutlet, NgClass, NgIf, SocialMediaComponent, NgStyle, CompaniesWeKeepComponent, InlineCTAComponent],
  standalone: true
})
export class LandingPageRightLayoutComponent implements OnInit {
  BPClassNames = BPClassNames;
  public borderVisible = false;
  isScrolled: boolean = false;
  screenWidth: any;

  @Input() heroContent: any;
  @Input() metaTags: any;

  constructor(
    @Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private metaService: Meta,
    private title: Title
  ) { }

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
  ngOnInit() {
    this.screenWidth = this.window.innerWidth;
    this.metaService?.addTags(this.metaTags);
    this.title.setTitle(this.heroContent);
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.borderVisible = (/true/i).test(params?.['showBorders']);
      }
    });

    const theme = this.document.body.getAttribute("data-theme");
    this.document.body.setAttribute("data-layout", `${theme}-right`);
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
