import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { BytePushersPopupService } from "src/app/modules/popup-modal/services/bytepushers-popup.service";
import { CTAService } from "src/app/services/cta.service";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-cta-form",
  templateUrl: "./cta-form.component.html",
  styleUrls: ["./cta-form.component.scss"],
})
export class CTAFormComponent {
  public isConsentModal: boolean = true;
  @Input() theme;
  @Input() layout;
  public ctaForm: FormGroup;

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private ctaService: CTAService,
    private bpPopupService: BytePushersPopupService
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

  setThemeSecondaryColor() {
    let styles = {
      color: this?.theme?.secondaryColor,
    };
    return styles;
  }
  setConcent(event: any) {}

  onCTASubmit() {
    let ctaReqObj;
    if (!this.ctaForm.invalid) {
      let name = this?.ctaForm?.controls["ctaName"]?.value;
      name = name.split(" ");
      ctaReqObj = {
        firstName: name[0],
        middleName: name.length >= 3 ? name[1] : "",
        lastName: name.length >= 3 ? name[2] : name[1],
        email: this?.ctaForm?.controls["ctaEmail"]?.value,
      };
      this.ctaService.ctaReqObjSubject.next(ctaReqObj);
      this.bpPopupService.isBPpopupOpenSubject.next(true);
    }
  }
}
