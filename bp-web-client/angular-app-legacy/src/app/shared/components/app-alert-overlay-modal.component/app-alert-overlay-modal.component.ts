import { Component, OnInit } from "@angular/core";
import { AppAlertOverlayModalService } from "./app-alert-overlay-modal.service";

@Component({
  selector: "app-alert-overlay-modal",
  styleUrls: ["./app-alert-overlay-modal.component.css"],
  template: ` the mat card is removed to test `,
})
export class AppAlertOverlayModalComponent implements OnInit {
  public message: { value: string } = { value: null };

  constructor(
    private appAlertOverlayModalService: AppAlertOverlayModalService
  ) {}

  ngOnInit(): void {
    this.appAlertOverlayModalService.message().subscribe((msg) => {
      this.message.value = msg;
    });
  }

  public closeModal($event) {
    this.appAlertOverlayModalService.close();
  }
}
