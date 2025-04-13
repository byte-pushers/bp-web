import { AfterViewInit, Component, Inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { DOCUMENT, NgClass, NgIf, NgStyle } from '@angular/common';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { WINDOW } from '@services/windows/window';
import { Meta, Title } from '@angular/platform-browser';
import { CompaniesWeKeepComponent } from "@app/shared/components/companies-we-keep/companies-we-keep.component";
import { BPClassNames } from "@app/app.classnames";
import { DialogService } from "@app/services/dialog/dialog.service";
import { BpButtonComponent } from "@app/shared/components/bp-button/bp-button.component";

@Component({
  selector: "app-landing-page-bottom-layout",
  templateUrl: "./landing-page-bottom-layout.component.html",
  styleUrls: ["./landing-page-bottom-layout.component.scss"],
  imports: [RouterOutlet, NgClass, NgIf, SocialMediaComponent, NgStyle, CompaniesWeKeepComponent, BpButtonComponent],
  standalone: true
})
export class LandingPageBottomLayoutComponent implements OnInit, AfterViewInit {
  BPClassNames = BPClassNames;
  @Input() heroContent: any;
  @Input() metaTags: any;
  public borderVisible = false;

  constructor(
    @Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document, private title: Title,
    private route: ActivatedRoute, private metaService: Meta, private dialog: DialogService) { }

  ngOnInit() {
    this.metaService?.addTags(this.metaTags);
    this.title.setTitle(this.heroContent);
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.borderVisible = (/true/i).test(params?.['showBorders']);
      }
    });

    const theme = document.body.getAttribute("data-theme");
    document.body.setAttribute("data-layout", `${theme}-bottom`);
  }

  ngAfterViewInit() {

  }
  getCTA() {
    this.dialog.show()
  }
  showBorders(): string {
    let style = '';
    if (this.borderVisible) {
      style = 'showBorders'
    }
    return style;
  }
}
