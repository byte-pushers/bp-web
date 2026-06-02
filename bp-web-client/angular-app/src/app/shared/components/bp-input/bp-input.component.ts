import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bp-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bp-input.component.html',
  styleUrls: ['./bp-input.component.scss']
})
export class BpInputComponent {
  @Input({ required: true }) control!: FormControl;

  @Input() label = '';
  @Input() showLabel:boolean = false;
  @Input() placeholder = '';
  @Input() type = 'text';

  @Input() validationMessages: Record<string, string> = {};

  get errorMessage(): string {
    if (!this.control?.errors) {
      return '';
    }

    const errors = this.control.errors;

    const defaultMessages: Record<string, string> = {
      required: `${this.label} is required`,
      email: `Please enter a valid email`,
      minlength: `Minimum length is ${errors['minlength']?.requiredLength}`,
      maxlength: `Maximum length is ${errors['maxlength']?.requiredLength}`,
      min: `Minimum value is ${errors['min']?.min}`,
      max: `Maximum value is ${errors['max']?.max}`,
      pattern: `${this.label} format is invalid`
    };

    const firstError = Object.keys(errors)[0];

    return (
      this.validationMessages[firstError] ||
      defaultMessages[firstError] ||
      'Invalid value'
    );
  }

  get showError(): boolean {
    return this.control.invalid &&
      (this.control.touched || this.control.dirty);
  }
} 