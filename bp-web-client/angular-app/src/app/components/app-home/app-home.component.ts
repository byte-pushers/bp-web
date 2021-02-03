import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import * as $ from 'jquery';
import {fromEvent, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy{
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  @ViewChild("homeBackgroundWorkImg") divView: ElementRef;


  constructor(private window: Window) {
  }

  ngOnInit() {

    $(document).ready(function(e) {
      const $prevButton = $(".left.carousel-control.carousel-control-prev");
      const $nextButton = $(".right.carousel-control.carousel-control-next");

      $prevButton.click(HomeComponent.previousButtonClickedEventHandler);
      $nextButton.click(HomeComponent.nextButtonClickedEventHandler);
    });
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      this.resizeImage(evt.currentTarget, this.divView);
    });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  ngAfterViewInit() {
    this.resizeImage(this.window, this.divView);
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

  private resizeImage(win: any, imageRef: ElementRef): void {
    const imageWidth = imageRef.nativeElement.getAttribute('width');
    const imageHeight = imageRef.nativeElement.getAttribute('height')
    const windowWidth = win.innerWidth;
    //const windowHeight = win.innerHeight;

    const height = (imageHeight * windowWidth)/imageWidth;

    imageRef.nativeElement.setAttribute('width', windowWidth);
    imageRef.nativeElement.setAttribute('height', height);
  }
}
