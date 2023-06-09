import { Component, OnInit } from "@angular/core";
import { BytePushersPopupService } from "src/app/modules/popup-modal/services/bytepushers-popup.service";

@Component({
  selector: "app-bytepushers-popup",
  templateUrl: "./bytepushers-popup.component.html",
  styleUrls: ["./bytepushers-popup.component.scss"],
})
export class BytepushersPopupComponent implements OnInit {
  public isBPpopup;
  public userConsent;
  constructor(private bpPopupService: BytePushersPopupService) {}

  ngOnInit() {
    this.bpPopupService.isBPpopupOpenSubject.subscribe((value) => {
      this.isBPpopup = value;
    });
  }

  setConsent(event: any) {
    if (event.target.checked) {
      this.userConsent = true;
    } else {
      this.userConsent = false;
    }
  }

  saveCTA() {
    // to do service integration
    this.closeCTA();
  }

  closeCTA() {
    this.userConsent = false;
    this.bpPopupService.isBPpopupOpenSubject.next(false);
  }
}
