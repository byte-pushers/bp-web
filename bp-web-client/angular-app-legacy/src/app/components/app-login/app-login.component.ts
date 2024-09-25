import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-app-login",
  templateUrl: "./app-login.component.html",
  styleUrls: ["./app-login.component.css"],
})
export class AppLoginComponent implements OnInit {
  loginForm: FormGroup;
  isUserLoggedIn: boolean = false;
  showHideLogin: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {}
  _formValue() {
    return this.loginForm.value;
  }
  onLoginSubmit() {
    let loginReqObj = {
      email: this.loginForm.controls["email"].value,
      password: this.loginForm.controls["password"].value,
    };
    this.loginService.login(loginReqObj);

    if (this.loginForm.valid) {
      console.log(this._formValue());
    }
    this.router.navigate(["/admin"]);
  }
}
