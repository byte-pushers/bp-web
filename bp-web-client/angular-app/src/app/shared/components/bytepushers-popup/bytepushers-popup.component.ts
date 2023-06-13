import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
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
  public ctaForm: FormGroup;
  constructor(
    private bpPopupService: BytePushersPopupService,
    private ctaService: CTAService
  ) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      ctaEmail: new FormControl("", [Validators.required, Validators.email]),
    });
  }
  get ctaName() {
    return this.ctaForm.get("ctaName");
  }
  get ctaEmail() {
    return this.ctaForm.get("ctaEmail");
  }
  onCTASubmit() {}
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
    let ctaequestObjwithConsent;
    let ctaReqObj;
    if (this.ctaequestObj != "bottomLayout") {
      ctaequestObjwithConsent = { ...this.ctaequestObj, consent: true };
    } else {
      if (!this.ctaForm.invalid) {
        let name = this.ctaName?.value;
        name = name.split(" ");
        ctaReqObj = {
          firstName: name[0],
          middleName: name.length >= 3 ? name[1] : "",
          lastName: name.length >= 3 ? name[2] : name[1],
          email: this.ctaEmail?.value,
        };
        this.ctaService.ctaReqObjSubject.next(ctaReqObj);
        this.bpPopupService.isBPpopupOpenSubject.next(true);
      }
      ctaequestObjwithConsent = { ...ctaReqObj, consent: true };
    }

    console.log(ctaequestObjwithConsent);
    this.closeCTA();
  }

  closeCTA() {
    this.userConsent = false;
    this.ctaService.ctaReqObjSubject.next(null);
    this.bpPopupService.isBPpopupOpenSubject.next(false);
  }
}
