import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit{

  isUserLoggedIn:boolean = false;
  showHideLogin:boolean = false;
    constructor(private fb: FormBuilder,
      private router:Router){
    }

    ngOnInit() {
    }

    onSubmit(){

    }

    public loginForm: FormGroup = this.fb.group({
      userName:'',
      userPassword: ''
    });
}
