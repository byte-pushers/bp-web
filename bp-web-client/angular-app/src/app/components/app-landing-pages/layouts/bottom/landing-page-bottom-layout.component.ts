import { AfterViewInit, Component, Inject, Input, OnInit } from "@angular/core";
import { ActivatedRoute, RouterOutlet } from "@angular/router";
import { DOCUMENT, NgClass, NgIf, NgStyle } from '@angular/common';
import { SocialMediaComponent } from '@components/social-media/social-media.component';
import { WINDOW } from '@services/windows/window';
import { Title } from '@angular/platform-browser';

@Component({
  selector: "app-landing-page-bottom-layout",
  templateUrl: "./landing-page-bottom-layout.component.html",
  styleUrls: ["./landing-page-bottom-layout.component.scss"],
  imports: [RouterOutlet, NgClass, NgIf, SocialMediaComponent, NgStyle],
  standalone: true
})
export class LandingPageBottomLayoutComponent implements OnInit, AfterViewInit{
  @Input() heroContent: any;
  public borderVisible = false;

  constructor(
    @Inject(WINDOW) private window: Window, @Inject(DOCUMENT) private document: Document, private title: Title,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.title.setTitle(this.heroContent);
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.borderVisible = (/true/i).test(params?.['showBorders']);
      }
    });
  }

  ngAfterViewInit() {

  }

  showBorders(): string {
    let style = '';
    if (this.borderVisible) {
      style = 'showBorders'
    }
    return style;
  }
}
