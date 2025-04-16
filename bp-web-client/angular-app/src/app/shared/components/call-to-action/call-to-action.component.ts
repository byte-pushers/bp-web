import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DialogService } from '@app/services/dialog/dialog.service';
import { BpInputComponent } from '../bp-input/bp-input.component';
import { BpButtonComponent } from '../bp-button/bp-button.component';
import { faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CallToActionService } from '@app/services/callToAction/callToAction.service';
@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NgIf, FormsModule, ReactiveFormsModule, BpInputComponent, BpButtonComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent implements OnInit {
  public isConsentModal: boolean = true;
  public ctaForm: FormGroup;
  public ctaformsubmitted = false;
  saveIcon = faFloppyDisk
  closeIcon = faXmark;
  inlineCTAData: any;
  isInlineCTASubmitted: any;

  constructor(
    // private headerService: HeaderService,
    // private route: ActivatedRoute,
    // private ctaService: CTAService,
    // private bpPopupService: BytePushersPopupService
    private dialog: DialogService,
    private ctaService: CallToActionService
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
  ngOnInit() {
    this.ctaService.isInlineCTA.subscribe((flag: any) => {
      this.isInlineCTASubmitted = flag
    })
    this.ctaService.ctaReqObj.subscribe((dataObj: any) => {
      this.inlineCTAData = dataObj
    })
    console.log(this.isInlineCTASubmitted, this.inlineCTAData);
    if (this.isInlineCTASubmitted) {
      this.setValuesToForm()
    }
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
  setValuesToForm() {
    //setting inline form data to actual cta form
    this?.ctaForm?.controls["ctaName"]?.setValue(this.inlineCTAData.fullname);
    this?.ctaForm?.controls["ctaEmail"]?.setValue(this.inlineCTAData.email);
    // disabling the form controls as we did set value
    this?.ctaForm?.controls["ctaName"]?.disable();
    this?.ctaForm?.controls["ctaEmail"]?.disable();
  }

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
