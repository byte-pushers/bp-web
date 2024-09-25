import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SocialMediaComponent } from "./components/app-social-media.component/app-social-media.component";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppFooterComponent } from "./components/app-footer/app-footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    CarouselModule.forRoot(),
    FontAwesomeModule,
    RouterModule,
  ],
  declarations: [SocialMediaComponent, AppFooterComponent],
  exports: [
    SocialMediaComponent,
    AppFooterComponent,
    CommonModule,
    FormsModule,
    CarouselModule,
    FontAwesomeModule,
    RouterModule,
  ],
})
export class SharedModule {}
