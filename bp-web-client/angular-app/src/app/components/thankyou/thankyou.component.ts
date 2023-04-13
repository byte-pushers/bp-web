import { Component } from "@angular/core";
import { ScrollToService } from "src/app/services/scroll-to.service";

@Component({
  selector: "app-thankyou",
  templateUrl: "./thankyou.component.html",
  styleUrls: ["./thankyou.component.scss"],
})
export class ThankyouComponent {
  constructor(private scrollService: ScrollToService) {
    this.scrollService.thankyouPage.next(true);
  }
  ngOnDestroy() {
    this.scrollService.thankyouPage.next(false);
  }
}
