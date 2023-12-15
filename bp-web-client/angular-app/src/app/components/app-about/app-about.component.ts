import { AfterViewInit, Component, OnInit } from "@angular/core";
import * as $ from "jquery";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: "app-about",
  templateUrl: "./app-about.component.html",
  styleUrls: ["./app-about.component.css"],
})
export class AboutComponent implements OnInit, AfterViewInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  metaTagsLocal = [
    {
      name: "description",
      content:
        "Byte Pushers, Inc. is a software design company that specializes in mobile-first application development. We pride ourselves on writing high quality, easily maintainable, and very robust solutions. We take a user-centric approach in our design process to ensure we create meaningful and remarkable user experiences. We're dedicated to helping you reach your vision and meet your goals.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Bytepushers Software Company",
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private metaService: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle(
      "Creating solutions to solve today's and tomorrow’s problems bit by bit."
    );
    this.metaService.addTags(this.metaTagsLocal);
  }
  ngAfterViewInit() {
    const $prevButton = $(".left.carousel-control.carousel-control-prev");
    const $nextButton = $(".right.carousel-control.carousel-control-next");
    $prevButton.click(AboutComponent.previousButtonClickedEventHandler);
    $nextButton.click(AboutComponent.nextButtonClickedEventHandler);
  }

  private static previousButtonClickedEventHandler(event: Event): void {
    const $nextButton = $("slide.item.carousel-item");
    $nextButton.removeClass("left-right");
    $nextButton.addClass("right-left");
  }

  private static nextButtonClickedEventHandler(event: Event): void {
    const $previousButton = $("slide.item.carousel-item");
    $previousButton.removeClass("right-left");
    $previousButton.addClass("left-right");
  }
  setThemeBGImg() {
    let styles = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url('assets/images/aboutPage/bytePushersAboutPageSplashScreenBackground.png')
          center no-repeat`,
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
