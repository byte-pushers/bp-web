import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-landing-page-left-layout",
  templateUrl: "./landing-page-left-layout.component.html",
  styleUrls: ["./landing-page-left-layout.component.scss"],
})
export class LandingPageLeftLayoutComponent implements OnInit {
  @Input() image;
  @Input() title;
  @Input() slogan;
  @Input() theme;
  public ctaForm: FormGroup;
  constructor() {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl("", [Validators.required]),
      ctaEmail: new FormControl("", [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {}
  onCTASubmit() {
    let ctaReqObj = {
      Name: this.ctaForm.controls["ctaName"].value,
      Email: this.ctaForm.controls["ctaEmail"].value,
    };
    console.log(ctaReqObj);
  }
  setThemePrimaryColor() {
    let styles = {
      color: this.theme.primaryColor,
    };
    return styles;
  }
  setThemeSecondaryColor() {
    let styles = {
      color: this.theme.secondaryColor,
    };
    return styles;
  }
  setThemeBGImg() {
    let styles = {
      background: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url(${this.theme.imagePath.left}) center no-repeat`,
      "background-size": "cover",
    };
    return styles;
  }
}
