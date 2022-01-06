import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ScrollToService} from '../../services/scroll-to.service';
@Component({
  selector: 'app-services',
  templateUrl: './app-services.component.html',
  styleUrls: ['./app-services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public scrollToService: ScrollToService) { }

  ngOnInit() {
    $(document).ready(function(e) {
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
