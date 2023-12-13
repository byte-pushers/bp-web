import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as $ from "jquery";
import { ScrollToService } from "../../services/scroll-to.service";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-services",
  templateUrl: "./app-services.component.html",
  styleUrls: ["./app-services.component.css"],
})
export class ServicesComponent implements OnInit, AfterViewInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  constructor(
    private route: ActivatedRoute,
    public scrollToService: ScrollToService,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle(
      "Design, Develop and Deliver your ideas on time and under budget."
    );
  }
  ngAfterViewInit() {
    const $prevButton = $(".left.carousel-control.carousel-control-prev");
    const $nextButton = $(".right.carousel-control.carousel-control-next");
    $prevButton.click(ServicesComponent.previousButtonClickedEventHandler);
    $nextButton.click(ServicesComponent.nextButtonClickedEventHandler);
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
      background: `url('assets/images/servicesPage/bytePushersServicesBg.png')
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
