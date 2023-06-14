import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppComponent } from "./shared/components/app.component/app.component";
import { AppHeaderComponent } from "./shared/components/app-header.component/app-header.component";
import { AppBodyComponent } from "./shared/components/app-body.component/app-body.component";
import { HomeComponent } from "./components/app-home/app-home.component";
import { ContactComponent } from "./components/app-contact/app-contact.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { NgBootstrapFormValidationModule } from "ng-bootstrap-form-validation";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxBootstrapSliderModule } from "ngx-bootstrap-slider";
import { QuoteService } from "./shared/services/quote.service";
import { AppFooterComponent } from "./shared/components/app-footer/app-footer.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { MatCardModule } from "@angular/material/card";
import { AppAlertOverlayModalComponent } from "./shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.component";
import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { RouterLinkActive } from "@angular/router";
import { InfoComponent } from "./components/app-info/app-info.component";
import { AboutComponent } from "./components/app-about/app-about.component";
import { WorkComponent } from "./components/app-work/app-work.component";
import { ServicesComponent } from "./components/app-services/app-services.component";
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
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PopupModalComponent } from "./modules/popup-modal/components/popup-modal.component";
import { HttpRequestInterceptor } from "./interceptors/http-request.interceptor";
import { MADLandingComponent } from "./components/app-madlanding/madlanding.component";
import { SocialMediaComponent } from "./shared/components/app-social-media.component/app-social-media.component";
import { RightComponent } from "./components/app-madlanding/right/right.component";
import { BottomComponent } from "./components/app-madlanding/bottom/bottom.component";
import { LeftComponent } from "./components/app-madlanding/left/left.component";
import { LandingPageBottomLayoutComponent } from "./components/app-landing-pages/layouts/bottom/landing-page-bottom-layout.component";
import { LandingPageLeftLayoutComponent } from "./components/app-landing-pages/layouts/left/landing-page-left-layout.component";
import { LandingPageRightLayoutComponent } from "./components/app-landing-pages/layouts/right/landing-page-right-layout.component";
import { LogoTextAsideComponent } from "./shared/components/logo-text-aside/logo-text-aside.component";
import { LogoOnlyTextComponent } from "./shared/components/logo-only-text/logo-only-text.component";
import { LogoTextBottomComponent } from "./shared/components/logo-text-bottom/logo-text-bottom.component";
import { CTAFormComponent } from "./shared/components/cta-form/cta-form.component";
import { BytepushersPopupComponent } from "./shared/components/bytepushers-popup/bytepushers-popup.component";
import { AvialLogoComponent } from "./shared/components/heroLogos/avial-logo/avial-logo.component";

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppBodyComponent,
    HomeComponent,
    ServicesComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    InfoComponent,
    AppFooterComponent,
    SocialMediaComponent,
    AppAlertOverlayModalComponent,
    PhoneNumberDirective,
    AppLoginComponent,
    PopupModalComponent,
    MADLandingComponent,
    RightComponent,
    BottomComponent,
    LeftComponent,
    LandingPageBottomLayoutComponent,
    LandingPageLeftLayoutComponent,
    LandingPageRightLayoutComponent,
    LogoTextAsideComponent,
    LogoOnlyTextComponent,
    LogoTextBottomComponent,
    CTAFormComponent,
    BytepushersPopupComponent,
    AvialLogoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    NgxBootstrapSliderModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatCardModule,
    OverlayModule,
    NgxPageScrollCoreModule.forRoot({
      /* custom settings here */
    }),
    NgxPageScrollModule,
    FontAwesomeModule,
    CommonModule,
  ],
  providers: [
    RouterLinkActive,
    QuoteService,
    { provide: Window, useValue: window },
    ContactButtonService,
    AppRoutingService,
    StateNameService,
    DeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  entryComponents: [
    // Needs to be added here because otherwise we can't
    // dynamically render this component at runtime
    AppAlertOverlayModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  currentEnvironment!: string;
}
