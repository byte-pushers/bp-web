import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";

@Component({
  selector: "app-model-popup",
  templateUrl: "./model-popup.component.html",
  styleUrls: ["./model-popup.component.scss"],
})
export class ModelPopupComponent {
  public popup: any;
  public isModalPopup: boolean = false;
  private button1: string = "";
  private button2: string = "";
  private button3: string = "";
  constructor(private popupService: PopupService) {
    this.popupService.getPopupBroadcast().subscribe((popupInfo: any) => {
      console.log(popupInfo);
      this.popup = popupInfo;
      this.show();
    });
  }

  show(): void {
    this.isModalPopup = true;
  }
  hide(): void {
    this.isModalPopup = false;
  }
  confirm() {
    this.hide();
    this.popupService.sendResponse(true);
  }
  dismiss() {
    this.hide();
    this.popupService.sendResponse(false);
  }
  close() {
    this.hide();
    this.popupService.sendResponse("close");
  }
  cancel() {
    this.hide();
    this.popupService.sendResponse("cancel");
  }
  ok() {
    this.hide();
    this.popupService.sendResponse("ok");
  }
}
