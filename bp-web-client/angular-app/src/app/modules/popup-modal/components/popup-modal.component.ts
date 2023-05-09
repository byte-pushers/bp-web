import { Component } from "@angular/core";
// <i class="fa-solid fa-triangle-exclamation"></i> <i class="fa-solid fa-circle-xmark"></i>
import {
  faTriangleExclamation,
  faCircleXmark,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { PopupModalService } from "src/app/modules/popup-modal/services/popup-modal.service";
import { PopupModalInfo } from "../models/popup-modal-info";

@Component({
  selector: "app-model-popup",
  templateUrl: "./popup-modal.component.html",
  styleUrls: ["./popup-modal.component.scss"],
})
export class PopupModalComponent {
  faCircle = faCircle;
  faWarning = faTriangleExclamation;
  faClose = faCircleXmark;
  public popup: PopupModalInfo;
  public isModalPopup: boolean = false;
  private button1: string = "";
  private button2: string = "";
  private button3: string = "";
  constructor(private popupService: PopupModalService) {
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
