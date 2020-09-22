import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from "../app-routing.module";
import {AppComponent} from './shared/components/app.component/app.component';
import {AppHeaderComponent} from './shared/components/app-header.component/app-header.component';
import {AppBodyComponent} from './shared/components/app-body.component/app-body.component';
import {HomeComponent} from './components/app-home/app-home.component';
import {ServicesComponent} from './components/app-services/app-services.component';
import {WorkComponent} from './components/app-work/app-work.component';
import {AboutComponent} from './components/app-about/app-about.component';
import {ContactComponent} from './components/app-contact/app-contact.component';
import {PageScrollingUtility} from "./utilities/page-scrolling.utility";
import {Ng2PageScrollModule} from "ng2-page-scroll";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {NgBootstrapFormValidationModule} from 'ng-bootstrap-form-validation';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {NgxBootstrapSliderModule} from "ngx-bootstrap-slider";
import { InfoComponent } from './components/app-info/app-info.component';
import {HttpClientModule} from "@angular/common/http";


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
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2PageScrollModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    NgBootstrapFormValidationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapSliderModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PageScrollingUtility
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
