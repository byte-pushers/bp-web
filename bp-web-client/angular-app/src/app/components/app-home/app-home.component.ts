import { AfterViewInit, Component, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DynamicComponentService } from '@services/dynamic-component.service';
import { WINDOW } from '@services/windows/window';
import { DEVICE_PLATFORM } from '@app/model/screen-size.enum';
import {
  LandingPageBottomLayoutComponent
} from '@components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component';
import {
  LandingPageLeftLayoutComponent
} from '@components/app-landing-pages/layouts/left/landing-page-left-layout.component';
import { MobileComponent } from '@components/app-landing-pages/layouts/mobile/mobile.component';
import {
  LandingPageRightLayoutComponent
} from '@components/app-landing-pages/layouts/right/landing-page-right-layout.component';
import { CompaniesWeKeepComponent } from '@app/shared/components/companies-we-keep/companies-we-keep.component';
import { DOCUMENT, NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingPageBottomLayoutComponent,
    LandingPageLeftLayoutComponent,
    MobileComponent,
    NgClass,
    LandingPageRightLayoutComponent,
    CompaniesWeKeepComponent
  ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent implements OnInit, AfterViewInit {
  #layoutId: string = '';
  #layoutType: string = '';
  @ViewChild('landingPage', { read: ViewContainerRef })
  private landingPageContainer!: ViewContainerRef;
  #deviceDimensions = new Map<String, { name?: string, width: number, height: number }[]>();
  public borderVisible = false;

  constructor(@Inject(WINDOW) private window: Window, private dynamicComponentService: DynamicComponentService,
    private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) {
    console.log('AppHomeComponent(): inside constructor');

    this.#deviceDimensions.set('mobile', [
      { name: 'iPhone SE', width: 375, height: 667 },
      { name: 'iPhone XR', width: 414, height: 896 },
      { name: 'iPhone 12 Pro', width: 390, height: 844 },
      { name: 'iPhone 14 Pro Max', width: 430, height: 932 },
      { name: 'Pixel 7', width: 412, height: 915 },
      { name: 'Samsung Galaxy S8+', width: 360, height: 740 },
      { name: 'Samsung Galaxy S20 Ultra', width: 412, height: 915 },
      { name: 'Galaxy Z Fold 5', width: 344, height: 882 },
      { name: 'Asus Zenbook Fold', width: 853, height: 1280 },
      { name: 'Samsung Galaxy S8+', width: 360, height: 740 },
      { name: 'Samsung Galaxy S20 Ultra', width: 412, height: 915 },
      { name: 'Samsung Galaxy A51/71', width: 412, height: 914 },
      { name: 'Surface Duo', width: 540, height: 720 }
    ]);

    this.#deviceDimensions.set('tablet', [
      { name: 'iPad Mini', width: 768, height: 1024 },
      { name: 'iPad Air', width: 820, height: 1180 },
      { name: 'iPad Pro', width: 1024, height: 1366 },
      { name: 'Surface Pro 7', width: 912, height: 1368 },
      { name: 'Nest Hub', width: 1024, height: 600 },
      { name: 'Nest Hub Max', width: 1280, height: 800 }
    ]);

    this.#deviceDimensions.set('desktop', [
      { width: 2560, height: 1664 },
      { width: 2560, height: 1600 },
      { width: 2048, height: 1332 },
      { width: 2048, height: 1280 },
      { width: 1920, height: 1200 },
      { width: 1920, height: 1080 },
      { width: 1710, height: 1112 },
      { width: 1710, height: 1068 },
      /*{ width: 1470, height: 956 },*/
      { width: 1470, height: 918 },
      { width: 1280, height: 832 },
      { width: 1280, height: 800 },
      { width: 1280, height: 720 },
      { width: 1024, height: 666 },
      { width: 1024, height: 640 },
      { width: 960, height: 600 }
    ]);
  }

  ngOnInit() {
    this.#setLayoutId();
    this.route.queryParams.subscribe((params) => {
      if (params?.['showBorders'] == "true") {
        this.borderVisible = (/true/i).test(params?.['showBorders']);
      }
    });
  }

  ngAfterViewInit() {
    if (this.isMobileDevice(this.window.screen?.width, this.window.screen?.height)) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.MOBILE);
    } else if (this.isTabletDevice(this.window.screen?.width, this.window.screen?.height)) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.TABLET);
    } else if (this.isDesktopDevice(this.window.screen?.width, this.window.screen?.height)) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.DESKTOP);
    } else {
      //Todo: Re-evaluate device by width only
      if (this.window.screen?.width <= 820) {
        this.#loadLandingPageContainer(DEVICE_PLATFORM.MOBILE);
      } else if (this.window.screen?.width < 1280) {
        this.#loadLandingPageContainer(DEVICE_PLATFORM.TABLET);
      } else {
        this.#loadLandingPageContainer(DEVICE_PLATFORM.DESKTOP);
      }
      // this.#loadLandingPageContainer(DEVICE_PLATFORM.DESKTOP);
    }

    /**/
  }

  #setLayoutId() {
    this.route.queryParams.subscribe((params) => {
      this.#layoutId = params?.['id'];
      this.#layoutType = params?.['layout'];
    });
  }

  #loadLandingPageContainer(devicePlatform: DEVICE_PLATFORM) {
    this.dynamicComponentService
      .createComponent(
        this.landingPageContainer,
        undefined,
        devicePlatform === DEVICE_PLATFORM.MOBILE ? 'mobile' : this.#layoutType
      )
      .then((componentCreated: any) => {
        console.log(
          `component created: ${JSON.stringify(componentCreated)}`,
          componentCreated
        );
      },
        (error: any) => {
          console.log(`An error occurred: ${JSON.stringify(error)}`, error);
        }
      );
    // if (isPlatformBrowser(this.platformId)) {
    //   this.resizeImage(this.windowRef.nativeWindow, this.divView);
    // } else {
    //   this.resizeImage(this.window, this.divView);
    // }
  }

  private isMobileDevice(screenWidth: number, screenHeight: number) {
    return this.findDeviceDimension('mobile', screenWidth, screenHeight);
  }

  private isTabletDevice(screenWidth: number, screenHeight: number) {
    return this.findDeviceDimension('tablet', screenWidth, screenHeight);
  }

  private isDesktopDevice(screenWidth: number, screenHeight: number) {
    return this.findDeviceDimension('desktop', screenWidth, screenHeight);
  }

  private findDeviceDimension(deviceName: string, screenWidth: number, screenHeight: number): boolean {
    console.log(this.#deviceDimensions.get(deviceName));
    const foundDevice = this.#deviceDimensions.get(deviceName)?.some((deviceDimension) => screenWidth === deviceDimension.width && screenHeight === deviceDimension.height);

    return foundDevice != null ? foundDevice : false;
  }

  showBorders(): string {
    let style = '';

    if (this.borderVisible) {
      style = 'showBorders'
    }

    return style;
  }
}
