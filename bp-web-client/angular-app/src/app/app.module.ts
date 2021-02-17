import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {OverlayModule} from '@angular/cdk/overlay';
import {AppComponent} from './shared/components/app.component/app.component';
import {AppHeaderComponent} from './shared/components/app-header.component/app-header.component';
import {AppBodyComponent} from './shared/components/app-body.component/app-body.component';
import {HomeComponent} from './components/app-home/app-home.component';
import {ContactComponent} from './components/app-contact/app-contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {FormsModule} from '@angular/forms';
import {NgxBootstrapSliderModule} from 'ngx-bootstrap-slider';
import {QuoteService} from './shared/services/quote.service';
import {AppFooterComponent} from './shared/components/app-footer/app-footer.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatCardModule} from '@angular/material/card';
import {AppAlertOverlayModalComponent} from './shared/components/app-alert-overlay-modal.component/app-alert-overlay-modal.component';
import {NgxPageScrollCoreModule} from 'ngx-page-scroll-core';
import {NgxPageScrollModule} from 'ngx-page-scroll';
import {RouterLinkActive, RouterModule} from '@angular/router';
import {InfoComponent} from './components/app-info/app-info.component';
import {AboutComponent} from './components/app-about/app-about.component';
import {WorkComponent} from './components/app-work/app-work.component';
import {ServicesComponent} from './components/app-services/app-services.component';
import {PhoneNumberDirective} from './directives/phone-number.directive';
import {AppRoutingModule} from './app-routing.module';
import {AppRoutingService} from './shared/services/app-routing.service';
import {StateListService} from "./services/state-list.service";

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
    AppAlertOverlayModalComponent,
    PhoneNumberDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    FormsModule,
    NgxBootstrapSliderModule,
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatCardModule,
    OverlayModule,
    NgxPageScrollCoreModule.forRoot({ /* custom settings here */}),
    NgxPageScrollModule
  ],
  providers: [
    RouterLinkActive,
    QuoteService,
    {provide: Window, useValue: window},
    AppRoutingService,
    StateListService
  ],
  entryComponents: [
    // Needs to be added here because otherwise we can't
    // dynamically render this component at runtime
    AppAlertOverlayModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
