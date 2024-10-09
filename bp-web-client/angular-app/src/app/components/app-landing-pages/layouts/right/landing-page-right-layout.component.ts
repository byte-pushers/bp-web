import { Component, Inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { DOCUMENT, NgClass, NgIf } from '@angular/common';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { WINDOW } from '@services/windows/window';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-landing-page-right-layout",
  templateUrl: "./landing-page-right-layout.component.html",
  styleUrls: ["./landing-page-right-layout.component.scss"],
  imports: [RouterOutlet, NgClass, NgIf, SocialMediaComponent],
  standalone: true
})
export class LandingPageRightLayoutComponent implements OnInit {
  @Input() heroContent: any;
  constructor(
    @Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.title.setTitle(this.heroContent);
  }

  showBorders(): boolean | void {
    let isBorders;
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorder'] == "true") {
        isBorders = params?.['showBorder'];
      }
    });
    return isBorders;
  }
}
