import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import * as $ from "jquery";
import { fromEvent, Observable, Subscription } from "rxjs";
import { ScrollToService } from "../../services/scroll-to.service";
import { environment } from "../../../environments/environment";
import { DynamicComponentService } from '../../shared/services/dynamic-component.service';

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./app-home.component.html",
  styleUrls: ["./app-home.component.css"],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  public resizeObservable$: Observable<Event>;
  public resizeSubscription$: Subscription;
  @ViewChild("homeBackgroundWorkImg") divView: ElementRef;
  @ViewChild('landingPage', {read: ViewContainerRef}) private landingPageContainer !: ViewContainerRef;

  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;

  constructor(private window: Window, public scrollToService: ScrollToService, private dynamicComponentService: DynamicComponentService) {}

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
    this.dynamicComponentService.createComponent(this.landingPageContainer).then(componentCreated => {
      console.log(`component created: ${JSON.stringify(componentCreated)}`, componentCreated);
    }, error => {
      console.log(`An error occurred: ${JSON.stringify(error)}`, error);
    });

    this.resizeImage(this.window, this.divView);
  }

  private resizeImage(win: any, imageRef: ElementRef): void {
    const imageWidth = imageRef.nativeElement.getAttribute("width");
    const imageHeight = imageRef.nativeElement.getAttribute("height");
    const windowWidth = win.innerWidth;

    const height = (imageHeight * windowWidth) / imageWidth;

    imageRef.nativeElement.setAttribute("width", windowWidth);
    imageRef.nativeElement.setAttribute("height", height);
  }
}
