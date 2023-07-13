import { Component, OnInit, Renderer2 } from "@angular/core";
import * as $ from "jquery";
import { ScrollToService } from "../../services/scroll-to.service";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-services",
  templateUrl: "./app-services.component.html",
  styleUrls: ["./app-services.component.css"],
})
export class ServicesComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  constructor(public scrollToService: ScrollToService,private _renderer2: Renderer2) {}

  ngOnInit() {
   let script = this._renderer2.createElement('script');
   script.type = `text/javascript`;
   script.text =`
    var _hsq = window._hsq = window._hsq || [];
   _hsq.push(["identify",{
       email: 'pharshu.ram@armam.com',
       favorite_color: 'orange'
   }]);

    _hsq.push(['setPath', '/services']);
    _hsq.push(['trackPageView']);


   `;
   this._renderer2.appendChild(document.body, script);

    $(document).ready(function (e) {
      const $prevButton = $(".left.carousel-control.carousel-control-prev");
      const $nextButton = $(".right.carousel-control.carousel-control-next");

      $prevButton.click(ServicesComponent.previousButtonClickedEventHandler);
      $nextButton.click(ServicesComponent.nextButtonClickedEventHandler);
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
}
