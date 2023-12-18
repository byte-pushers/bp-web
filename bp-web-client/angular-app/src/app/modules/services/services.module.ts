import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServicesRoutingModule } from "./services-routing.module";
import { ServicesComponent } from "./services.component";
import { SocialMediaComponent } from "src/app/shared/components/app-social-media.component/app-social-media.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, SharedModule, ServicesRoutingModule],
})
export class ServicesModule {}
