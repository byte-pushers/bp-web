import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-app-login",
  templateUrl: "./app-login.component.html",
  styleUrls: ["./app-login.component.css"],
})
export class AppLoginComponent implements OnInit {
  loginForm: FormGroup;
  isUserLoggedIn: boolean = false;
  showHideLogin: boolean = false;
  constructor(private fb: FormBuilder, private router: Router) {
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
    if (this.loginForm.valid) {
      console.log(this._formValue());
    }
  }
}
