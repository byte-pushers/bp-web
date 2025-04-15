import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  constructor() {
    this.ctaForm = new FormGroup({
      ctaName: new FormControl<any>("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      ctaEmail: new FormControl<any>("", [Validators.required, Validators.email]),
    });
  }
  setCTAData() {
    console.log(this.ctaForm.value);
  }
  get ctaName() {
    return this.ctaForm.get("ctaName");
  }
  get ctaEmail() {
    return this.ctaForm.get("ctaEmail");
  }
}
