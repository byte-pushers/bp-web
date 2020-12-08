import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {


    $(document).ready(function(e) {
      const $prevButton = $(".left.carousel-control.carousel-control-prev");
      const $nextButton = $(".right.carousel-control.carousel-control-next");

      $prevButton.click(HomeComponent.previousButtonClickedEventHandler);
      $nextButton.click(HomeComponent.nextButtonClickedEventHandler);
    });
  }
  public backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
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
