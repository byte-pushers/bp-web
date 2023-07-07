import { Component, OnInit } from "@angular/core";
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
@Component({
  selector: "app-about",
  templateUrl: "./app-about.component.html",
  styleUrls: ["./app-about.component.css"],
})
export class AboutComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    $(document).ready(function (e) {
      const $prevButton = $(".left.carousel-control.carousel-control-prev");
      const $nextButton = $(".right.carousel-control.carousel-control-next");

      $prevButton.click(AboutComponent.previousButtonClickedEventHandler);
      $nextButton.click(AboutComponent.nextButtonClickedEventHandler);
    });
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
