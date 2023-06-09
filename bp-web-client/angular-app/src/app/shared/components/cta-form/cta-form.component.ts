import { Component, Input } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
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
    private route: ActivatedRoute
  ) {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [Validators.required]),
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
    let name = this?.ctaForm?.controls["ctaName"]?.value;
    name = name.split(" ");
    console.log(name);
    let ctaReqObj = {
      firstName: name[0],
      middleName: name.length >= 3 ? name[1] : "",
      lastName: name.length >= 3 ? name[2] : name[1],
      Email: this?.ctaForm?.controls["ctaEmail"]?.value,
    };
    console.log(ctaReqObj);
  }
}
