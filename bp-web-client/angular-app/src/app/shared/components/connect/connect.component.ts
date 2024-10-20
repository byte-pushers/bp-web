import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BytePushersPopupService } from '@app/services/bp-popup/byte-pushers-popup.service';
import { ConnectService } from '@app/services/connect/connect.service';
import { DOCUMENT, NgStyle, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-connect',
  standalone: true,
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.scss',
  imports: [
    NgStyle
  ],
})
export class ConnectComponent {
  public isConsentModal: boolean = true;
  @Input() theme: any;
  @Input() layout: any;
  public ctaForm: FormGroup;
  public ctaformsubmitted = false;

  constructor(
    private connectService: ConnectService,
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
      this.connectService.ctaReqObjSubject.next(ctaReqObj);
      this.bpPopupService.isBPpopupOpenSubject.next(true);
    }
  }
}
