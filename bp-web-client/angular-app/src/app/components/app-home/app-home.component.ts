import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewContainerRef,} from '@angular/core';
import * as $ from 'jquery';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {ScrollToService} from '../../services/scroll-to.service';
import {environment} from '../../../environments/environment';
import {DynamicComponentService} from '../../shared/services/dynamic-component.service';
import {ActivatedRoute} from '@angular/router';
import {ResizeService} from '../../shared/services/resize.service';
import {DEVICE_PLATFORM} from '../../shared/models/screen-size.enum';
import {delay} from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./app-home.component.html",
  styleUrls: ["./app-home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  #layoutId: string;
  #layoutType: string;
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  public resizeObservable$: Observable<Event>;
  public resizeSubscription$: Subscription;
  @ViewChild("homeBackgroundWorkImg") private divView: ElementRef;
  @ViewChild("landingPage", { read: ViewContainerRef })
  private landingPageContainer!: ViewContainerRef;

  constructor(
    private window: Window,
    public scrollToService: ScrollToService,
    private dynamicComponentService: DynamicComponentService,
    private route: ActivatedRoute,
    private resizeService: ResizeService
  ) {}

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



  ngOnInit() {
    this.#setLayoutId();
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function (e) {
      const $prevButton = $(".left.carousel-control.carousel-control-prev");
      const $nextButton = $(".right.carousel-control.carousel-control-next");

      $prevButton.click(HomeComponent.previousButtonClickedEventHandler);
      $nextButton.click(HomeComponent.nextButtonClickedEventHandler);
    });
    this.resizeObservable$ = fromEvent(window, "resize");
    this.resizeSubscription$ = this.resizeObservable$.subscribe((Window) => {
      // TODO: Double check this.  resizeImage() method should have the follwoing params: Window, ElementRef
      this.resizeImage(Window.currentTarget, this.divView);
    });
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  ngAfterViewInit() {
    if (window.innerWidth <= 500) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.MOBILE);
    } else if (window.innerWidth < 1280) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.TABLET);
    } else {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.DESKTOP);
    }

    this.resizeService.onResize$
      .pipe(delay(0))
      .subscribe(devicePlatform => {
        this.#loadLandingPageContainer(devicePlatform);
      });
  }

  private resizeImage(win: any, imageRef: ElementRef): void {
    const imageWidth = imageRef.nativeElement.getAttribute("width");
    const imageHeight = imageRef.nativeElement.getAttribute("height");
    const windowWidth = win.innerWidth;

    const height = (imageHeight * windowWidth) / imageWidth;

    imageRef.nativeElement.setAttribute("width", windowWidth);
    imageRef.nativeElement.setAttribute("height", height);
  }

  #setLayoutId() {
    this.route.queryParams.subscribe((params) => {
      console.log(`params: ${JSON.stringify(params)}`);
      this.#layoutId = params?.id;
      this.#layoutType = params?.layout;
      console.log(`layout id: ${this.#layoutId}`);
    });
  }


  #loadLandingPageContainer(devicePlatform: DEVICE_PLATFORM) {
    this.dynamicComponentService.createComponent(
      this.landingPageContainer,
      this.#layoutId,
      devicePlatform === DEVICE_PLATFORM.MOBILE? 'bottom' : this.#layoutType
    ).then(
      (componentCreated) => {
        console.log(
          `component created: ${JSON.stringify(componentCreated)}`,
          componentCreated
        );
      },
      (error) => {
        console.log(`An error occurred: ${JSON.stringify(error)}`, error);
      }
    );
    this.resizeImage(this.window, this.divView);
  }
}
