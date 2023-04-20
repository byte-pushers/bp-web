import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit, Type,
  ViewChild, ViewContainerRef,
} from "@angular/core";
import * as $ from "jquery";
import { fromEvent, Observable, Subscription } from "rxjs";
import { ScrollToService } from "../../services/scroll-to.service";
import { environment } from "../../../environments/environment";
import {ComponentType} from "@angular/cdk/portal";

@Component({
  selector: "app-madlanding",
  templateUrl: "./madlanding.component.html",
  styleUrls: ["./madlanding.component.scss"],
})
export class MADLandingComponent implements OnInit, AfterViewInit, OnDestroy {
  public chucksPick3Url = environment.CHUCKS_PICK_3_URL;
  public resizeObservable$: Observable<Event>;
  public resizeSubscription$: Subscription;
  private landingPageLayoutConfig: {createComponent, component: ComponentType<any>, inputs: any}[]  = [
    {
      createComponent: ()=> import('./left/left.component').then(it => it.LeftComponent),
      component: null,
      inputs: {
        image: 'somepath',
        title: 'some title',
        slogan: 'some slogan'
      }
    },
    {
      createComponent: ()=> import('./right/right.component').then(it => it.RightComponent),
      component: null,
      inputs: {
        image: 'somepath',
        title: 'some title',
        slogan: 'some slogan'
      }
    },
    {
      createComponent: ()=> import('./bottom/bottom.component').then(it => it.BottomComponent),
      component: null,
      inputs: {
        image: 'somepath',
        title: 'some title',
        slogan: 'some slogan'
      }
    }
  ];
  @ViewChild("homeBackgroundWorkImg") divView: ElementRef;
  @ViewChild('landingPage', {read: ViewContainerRef}) private landingPageContainer!: ViewContainerRef;

  constructor(private window: Window, public scrollToService: ScrollToService) {}

  private createComponent(): Promise<boolean> {
    return new Promise<boolean>(async (resolve, reject) => {
      this.landingPageContainer.clear();
      const landingPageLayoutConfig = await this.randomlySelectLandingPageLayoutConfiguration();
      const componentRef = this.landingPageContainer.createComponent(await landingPageLayoutConfig?.createComponent());

      Object.entries(landingPageLayoutConfig?.inputs).forEach(([key, value]) => {
        componentRef.setInput(key, value);
      });

      resolve(true);
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
    this.createComponent().then(componentCreated => {
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

  private async randomlySelectLandingPageLayoutConfiguration() {
    const landingPageLayoutRandomIndex = Math.floor(Math.random() * (this.landingPageLayoutConfig.length - 0) + 0);

    return this.landingPageLayoutConfig[landingPageLayoutRandomIndex];
  }
}
