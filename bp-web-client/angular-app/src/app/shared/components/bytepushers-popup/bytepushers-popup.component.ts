import { Component, OnInit } from "@angular/core";
import { BytePushersPopupService } from "src/app/modules/popup-modal/services/bytepushers-popup.service";
import { CTAService } from "src/app/services/cta.service";

@Component({
  selector: "app-bytepushers-popup",
  templateUrl: "./bytepushers-popup.component.html",
  styleUrls: ["./bytepushers-popup.component.scss"],
})
export class BytepushersPopupComponent implements OnInit {
  public isBPpopup;
  public userConsent;
  public ctaequestObj;
  constructor(
    private bpPopupService: BytePushersPopupService,
    private ctaService: CTAService
  ) {}

  ngOnInit() {
    this.bpPopupService.isBPpopupOpenSubject.subscribe((value) => {
      this.isBPpopup = value;
    });
    this.ctaService.ctaReqObjSubject.subscribe((value) => {
      this.ctaequestObj = value;
    });
    console.log(this.ctaequestObj);
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
    const ctaequestObjwithConsent = { ...this.ctaequestObj, consent: true };

    console.log(ctaequestObjwithConsent);
    this.closeCTA();
  }

  closeCTA() {
    this.userConsent = false;
    this.ctaService.ctaReqObjSubject.next(null);
    this.bpPopupService.isBPpopupOpenSubject.next(false);
  }
}
