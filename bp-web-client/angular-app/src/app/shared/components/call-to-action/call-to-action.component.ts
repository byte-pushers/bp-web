import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService } from '@app/services/dialog/dialog.service';
import { BpInputComponent } from '../bp-input/bp-input.component';
import { BpButtonComponent } from '../bp-button/bp-button.component';
import { faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, BpInputComponent, BpButtonComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent {
  public isConsentModal: boolean = true;
  public ctaForm: FormGroup;
  public ctaformsubmitted = false;
  saveIcon = faFloppyDisk
  closeIcon = faXmark

  constructor(
    // private headerService: HeaderService,
    // private route: ActivatedRoute,
    // private ctaService: CTAService,
    // private bpPopupService: BytePushersPopupService
    private dialog: DialogService
  ) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl<any>("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      ctaEmail: new FormControl<any>("", [Validators.required, Validators.email]),
      ctaConsent: new FormControl<any>("", [Validators.requiredTrue]),
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
    this.dialog.hide()

  }

  cancel() {
    this.ctaForm.reset()
    this.dialog.hide()
  }
}
