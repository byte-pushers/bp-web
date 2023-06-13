import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-mdn-right",
  templateUrl: "./right.component.html",
  styleUrls: ["./right.component.scss"],
})
export class RightComponent {
  public ctaForm: FormGroup;

  constructor() {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [Validators.required]),
      ctaEmail: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  onCTASubmit() {
    let ctaReqObj = {
      Name: this.ctaForm.controls["ctaName"].value,
      Email: this.ctaForm.controls["ctaEmail"].value,
    };
    console.log(ctaReqObj);
  }
}
