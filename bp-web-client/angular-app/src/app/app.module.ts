import { BrowserModule, Meta } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./shared/components/app.component/app.component";
import { AppHeaderComponent } from "./shared/components/app-header.component/app-header.component";
import { AppBodyComponent } from "./shared/components/app-body.component/app-body.component";
import { HomeComponent } from "./components/app-home/app-home.component";
import { ContactComponent } from "./components/app-contact/app-contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { NgBootstrapFormValidationModule } from "ng-bootstrap-form-validation";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { NgxBootstrapSliderModule } from "ngx-bootstrap-slider";
import { QuoteService } from "./shared/services/quote.service";
// import { NgxSpinnerModule } from "ngx-spinner";
// import { MatCardModule } from "@angular/material/card";
import { AppAlertOverlayModalComponent } from "./shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.component";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { RouterLinkActive } from "@angular/router";
import { InfoComponent } from "./components/app-info/app-info.component";
import { AboutComponent } from "./components/app-about/app-about.component";
import { PhoneNumberDirective } from "./directives/phone-number.directive";
import { AppRoutingModule } from "./app-routing.module";
import { AppRoutingService } from "./shared/services/app-routing.service";
import { CommonModule } from "@angular/common";
import { ContactButtonService } from "./services/contact-button.service";
import { StateNameService } from "./services/state-name.service";
import { GoogleTagManagerModule } from "angular-google-tag-manager";
import { OverlayModule } from "@angular/cdk/overlay";
import { environment } from "src/environments/environment";
import { AppLoginComponent } from "./components/app-login/app-login.component";
import { DeactivateGuard } from "./shared/guards/CanDeactivate.guard.service";
import { PopupModalComponent } from "./modules/popup-modal/components/popup-modal.component";
import { HttpRequestInterceptor } from "./interceptors/http-request.interceptor";
import { LandingPageBottomLayoutComponent } from "./components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component";
import { LandingPageLeftLayoutComponent } from "./components/app-landing-pages/layouts/left/landing-page-left-layout.component";
import { LandingPageRightLayoutComponent } from "./components/app-landing-pages/layouts/right/landing-page-right-layout.component";
import { LogoTextAsideComponent } from "./shared/components/logo-text-aside/logo-text-aside.component";
import { LogoOnlyTextComponent } from "./shared/components/logo-only-text/logo-only-text.component";
import { LogoTextBottomComponent } from "./shared/components/logo-text-bottom/logo-text-bottom.component";
import { CTAFormComponent } from "./shared/components/cta-form/cta-form.component";
import { BytepushersPopupComponent } from "./shared/components/bytepushers-popup/bytepushers-popup.component";
import { AvialLogoComponent } from "./shared/components/heroLogos/avial-logo/avial-logo.component";
import { GeLogoComponent } from "./shared/components/heroLogos/ge-logo/ge-logo.component";
import { VartecLogoComponent } from "./shared/components/heroLogos/vartec-logo/vartec-logo.component";
import { TilsterLogoComponent } from "./shared/components/heroLogos/tilster-logo/tilster-logo.component";
import { TexasInstrumentsLogoComponent } from "./shared/components/heroLogos/texas-instruments-logo/texas-instruments-logo.component";
import { VALogoComponent } from "./shared/components/heroLogos/va-logo/va-logo.component";
import { HeroLogosComponent } from "./shared/components/hero-logos/hero-logos.component";
import { LLNLLogoComponent } from "./shared/components/heroLogos/llnl-logo/llnl-logo.component";
import { ThomsonReutersLogoComponent } from "./shared/components/heroLogos/thomson-reuters-logo/thomson-reuters-logo.component";
import { ZynxhealthLogoComponent } from "./shared/components/heroLogos/zynxhealth-logo/zynxhealth-logo.component";
import { ArrowBottomComponent } from "./shared/components/heroLogos/arrow-bottom/arrow-bottom.component";
import { HamburgurComponent } from "./shared/components/hamburgur/hamburgur.component";
import { MobileComponent } from "./components/app-landing-pages/layouts/mobile/mobile.component";
import { SitemapComponent } from "./components/sitemap/sitemap.component";
import { WindowRef } from "./services/windowRef.service";
import { ServicesModule } from "./modules/services/services.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBodyComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    AppAlertOverlayModalComponent,
    PhoneNumberDirective,
    AppLoginComponent,
    PopupModalComponent,
    LandingPageBottomLayoutComponent,
    LandingPageLeftLayoutComponent,
    LandingPageRightLayoutComponent,
    LogoTextAsideComponent,
    LogoOnlyTextComponent,
    LogoTextBottomComponent,
    CTAFormComponent,
    BytepushersPopupComponent,
    AvialLogoComponent,
    GeLogoComponent,
    VartecLogoComponent,
    TilsterLogoComponent,
    TexasInstrumentsLogoComponent,
    VALogoComponent,
    HeroLogosComponent,
    LLNLLogoComponent,
    ThomsonReutersLogoComponent,
    ZynxhealthLogoComponent,
    ArrowBottomComponent,
    HamburgurComponent,
    MobileComponent,
    SitemapComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NgBootstrapFormValidationModule.forRoot(),
    // NgxBootstrapSliderModule,
    HttpClientModule,
    // NgxSpinnerModule,
    // MatCardModule,
    OverlayModule,
    NgxPageScrollCoreModule.forRoot({
      /* custom settings here */
    }),
    NgxPageScrollModule,
    CommonModule,
    SharedModule,
    ServicesModule,
  ],
  exports: [],
  providers: [
    Meta,
    RouterLinkActive,
    QuoteService,
    // { provide: Window, useValue: window },
    ContactButtonService,
    AppRoutingService,
    StateNameService,
    DeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    WindowRef,
  ],
  // entryComponents: [
  //   // Needs to be added here because otherwise we can't
  //   // dynamically render this component at runtime
  //   AppAlertOverlayModalComponent,
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {
  currentEnvironment!: string;
}
