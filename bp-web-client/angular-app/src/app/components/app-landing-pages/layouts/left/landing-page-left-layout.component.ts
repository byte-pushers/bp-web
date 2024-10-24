import { NgClass, NgIf, NgStyle } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { SocialMediaComponent } from "@app/components/social-media/social-media.component";
import { CompaniesWeKeepComponent } from "@app/shared/components/companies-we-keep/companies-we-keep.component";

@Component({
  selector: "app-landing-page-left-layout",
  templateUrl: "./landing-page-left-layout.component.html",
  styleUrls: ["./landing-page-left-layout.component.scss"],
  imports: [RouterOutlet, NgClass, NgIf, SocialMediaComponent, NgStyle, CompaniesWeKeepComponent],
  standalone: true
})
export class LandingPageLeftLayoutComponent implements OnInit {
  @Input() heroContent: any;
  public borderVisible = false;
  constructor(
    private route: ActivatedRoute,
    private metaService: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle(this.heroContent);
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.borderVisible = (/true/i).test(params?.['showBorders']);
      }
    });
  }

  showBorders(): string {
    let style = '';

    if (this.borderVisible) {
      style = 'showBorders'
    }

    return style;
  }
}
