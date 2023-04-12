import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as $ from "jquery";
import { fromEvent, Observable, Subscription } from "rxjs";
import { ScrollToService } from "../../services/scroll-to.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-madlanding",
  templateUrl: "./madlanding.component.html",
  styleUrls: ["./madlanding.component.scss"],
})
export class MADLandingComponent implements OnInit, AfterViewInit, OnDestroy {
  constructor(
    private window: Window,
    public scrollToService: ScrollToService
  ) {}
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  @ViewChild("homeBackgroundWorkImg") divView: ElementRef;

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

      $prevButton.click(MADLandingComponent.previousButtonClickedEventHandler);
      $nextButton.click(MADLandingComponent.nextButtonClickedEventHandler);
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
