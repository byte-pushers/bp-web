import { Component } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";
// <i class="fa-solid fa-triangle-exclamation"></i> <i class="fa-solid fa-circle-xmark"></i>
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-model-popup",
  templateUrl: "./model-popup.component.html",
  styleUrls: ["./model-popup.component.scss"],
})
export class ModelPopupComponent {
  faWarning = faTriangleExclamation;
  faClose = faCircleXmark;
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
