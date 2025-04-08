import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule,],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {
  public isConsentModal: boolean = true;
  public ctaForm: FormGroup;
  public ctaformsubmitted = false;

  constructor(
    // private headerService: HeaderService,
    // private route: ActivatedRoute,
    // private ctaService: CTAService,
    // private bpPopupService: BytePushersPopupService
  ) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      ctaEmail: new FormControl("", [Validators.required, Validators.email]),
      ctaConsent: new FormControl("", [Validators.requiredTrue]),
    });
  }
  get ctaName() {
    return this.ctaForm.get("ctaName");
  }
  get ctaEmail() {
    return this.ctaForm.get("ctaEmail");
  }
  get ctaConsent() {
    return this.ctaForm.get("ctaConsent");
  }

  // setThemeSecondaryColor() {
  //   let styles = {
  //     color: this?.theme?.secondaryColor,
  //   };
  //   return styles;
  // }
  setConcent(event: any) { }

  onCTASubmit() {
    this.ctaformsubmitted = true;
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
      // this.ctaService.ctaReqObjSubject.next(ctaReqObj);
      // this.bpPopupService.isBPpopupOpenSubject.next(true);
    }
    console.log(ctaReqObj);
  }
}
