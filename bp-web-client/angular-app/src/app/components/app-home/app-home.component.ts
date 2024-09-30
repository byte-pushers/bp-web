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

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        RouterOutlet,
        LandingPageBottomLayoutComponent,
        LandingPageLeftLayoutComponent,
        MobileComponent,
        LandingPageRightLayoutComponent
    ],
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.scss'
})
export class AppHomeComponent implements OnInit, AfterViewInit {
  #layoutId: string = '';
  #layoutType: string = '';
  @ViewChild('landingPage', { read: ViewContainerRef })
  private landingPageContainer!: ViewContainerRef;
  #deviceDimensions = new Map<String, {name?: string, width: number, height: number}[]>();

  constructor(@Inject(WINDOW) private window: Window, private dynamicComponentService: DynamicComponentService, private route: ActivatedRoute) {
    console.log('AppHomeComponent(): inside constructor');

    this.#deviceDimensions.set('mobile', [
      {name: 'iPhone SE', width: 375, height: 667},
      {name: 'iPhone XR', width: 414, height: 896},
      {name: 'iPhone 12 Pro', width: 390, height: 844},
      {name: 'iPhone 14 Pro Max', width: 430, height: 932},
      {name: 'Pixel 7', width: 412, height: 915},
      {name: 'Samsung Galaxy S8+', width: 360, height: 740},
      {name: 'Samsung Galaxy S20 Ultra', width: 412, height: 915},
      {name: 'Galaxy Z Fold 5', width: 344, height: 882},
      {name: 'Asus Zenbook Fold', width: 853, height: 1280},
      {name: 'Samsung Galaxy S8+', width: 360, height: 740},
      {name: 'Samsung Galaxy S20 Ultra', width: 412, height: 915},
      {name: 'Samsung Galaxy A51/71', width: 412, height: 914},
      {name: 'Surface Duo', width: 540, height: 720}
    ]);

    this.#deviceDimensions.set('tablet', [
      {name: 'iPad Mini', width: 768, height: 1024},
      {name: 'iPad Air', width: 820, height: 1180},
      {name: 'iPad Pro', width: 1024, height: 1366},
      {name: 'Surface Pro 7', width: 912, height: 1368},
      {name: 'Nest Hub', width: 1024, height: 600},
      {name: 'Nest Hub Max', width: 1280, height: 800}
    ]);

    this.#deviceDimensions.set('desktop', [
      {width: 2560, height: 1664},
      {width: 2560, height: 1600},
      {width: 2048, height: 1332},
      {width: 2048, height: 1280},
      {width: 1920, height: 1200},
      {width: 1710, height: 1112},
      {width: 1710, height: 1068},
      {width: 1470, height: 956},
      {width: 1470, height: 918},
      {width: 1280, height: 832},
      {width: 1280, height: 800},
      {width: 1024, height: 666},
      {width: 1024, height: 640},
      {width: 960, height: 600}
    ]);
  }

  ngOnInit() {
    this.#setLayoutId();
  }

  ngAfterViewInit() {
    if (this.isMobileDevice(this.window.screen?.width, this.window.screen?.height)) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.MOBILE);
    } else if (this.isTabletDevice(this.window.screen?.width, this.window.screen?.height)) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.TABLET);
    } else if (this.isDesktopDevice(this.window.screen?.width, this.window.screen?.height)) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.DESKTOP);
    }

    /*if (this.window.innerWidth <= 820) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.MOBILE);
    } else if (this.window.innerWidth < 1280) {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.TABLET);
    } else {
      this.#loadLandingPageContainer(DEVICE_PLATFORM.DESKTOP);
    }*/
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

  private isMobileDevice(width: number, height: number) {
    return this.findDeviceDimension('mobile', width, height);
  }

  private isTabletDevice(width: number, height: number) {
    return this.findDeviceDimension('tablet', width, height);
  }

  private isDesktopDevice(width: number, height: number) {
    return this.findDeviceDimension('desktop', width, height);
  }

  private findDeviceDimension(deviceName: string, width: number, height: number): boolean {
    const foundDevice = this.#deviceDimensions.get(deviceName)?.some((deviceDimension) =>  width === deviceDimension.width && height === deviceDimension.height);

    return foundDevice != null ? foundDevice : false;
  }
}
