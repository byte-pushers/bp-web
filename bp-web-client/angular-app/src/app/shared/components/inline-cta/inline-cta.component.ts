import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CallToActionService } from '@app/services/callToAction/callToAction.service';
import { DialogService } from '@app/services/dialog/dialog.service';
import { BpButtonComponent } from '../bp-button/bp-button.component';

@Component({
  selector: 'app-inline-cta',
  standalone: true,
  imports: [BpButtonComponent, ReactiveFormsModule, NgIf],
  templateUrl: './inline-cta.component.html',
  styleUrl: './inline-cta.component.scss'
})
export class InlineCTAComponent {
  public ctaForm: FormGroup;

  constructor(private ctaService: CallToActionService, private dialog: DialogService) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl<any>("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      ctaEmail: new FormControl<any>("", [Validators.required, Validators.email]),
    });
  }

  get ctaName() {
    return this.ctaForm.get("ctaName");
  }
  get ctaEmail() {
    return this.ctaForm.get("ctaEmail");
  }

  setCTAData() {
    this.ctaService.isInlineCTASubject.next(true);
    let ctaReqObj;
    ctaReqObj = {
      fullname: this?.ctaForm?.controls["ctaName"]?.value,
      email: this?.ctaForm?.controls["ctaEmail"]?.value,
    };
    this.ctaService.ctaReqObjSubject.next(ctaReqObj)
    this.ctaForm.reset()
    this.dialog.show()
  }
}
