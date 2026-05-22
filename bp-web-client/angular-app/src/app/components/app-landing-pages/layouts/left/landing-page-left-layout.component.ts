import {DOCUMENT, NgClass, NgIf, NgStyle} from "@angular/common";
import {Component, HostListener, Inject, Input, OnInit} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { SocialMediaComponent } from "@app/components/social-media/social-media.component";
import { CompaniesWeKeepComponent } from "@app/shared/components/companies-we-keep/companies-we-keep.component";
import { BPClassNames } from '@app/app.classnames'
import { CtaComponent } from "@app/components/cta/cta.component";
import { BpInputComponent } from "@app/shared/components/bp-input/bp-input.component";
import { BpButtonComponent } from "@app/shared/components/bp-button/bp-button.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { InlineCTAComponent } from "@app/shared/components/inline-cta/inline-cta.component";
import {WINDOW} from "@services/windows/window";
@Component({
  selector: "app-landing-page-left-layout",
  templateUrl: "./landing-page-left-layout.component.html",
  styleUrls: ["./landing-page-left-layout.component.scss"],
  imports: [RouterOutlet, CtaComponent, NgClass, NgIf,
    SocialMediaComponent, NgStyle, CompaniesWeKeepComponent, InlineCTAComponent],
  standalone: true
})
export class LandingPageLeftLayoutComponent implements OnInit {
  layoutContainer = 'flex flex-col justify-between customHeight'
  BPClassNames = BPClassNames;
  isScrolled: boolean = false;
  screenWidth: any;
  @Input() heroContent: any;
  @Input() metaTags: any;
  public ctaForm: FormGroup;
  public borderVisible = false;

  constructor(
    @Inject(WINDOW) private window: Window,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private metaService: Meta,
    private title: Title
  ) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      ctaEmail: new FormControl("", [Validators.required, Validators.email]),
    });
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
    this.document.body.setAttribute("data-layout", `${theme}-left`);
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
  getCTA() { }

}
