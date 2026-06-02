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


// import { CommonModule, NgIf } from '@angular/common';
// import { Component, EventEmitter, forwardRef, Input, Output, Self } from '@angular/core';
// import { FormControl, FormsModule, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-bp-input',
//   standalone: true,
//   imports: [CommonModule, NgIf, FormsModule, ReactiveFormsModule],
//   templateUrl: './bp-input.component.html',
//   styleUrl: './bp-input.component.scss',

// })
// export class BpInputComponent {
//   @Input() label: string = '';
//   @Input() placeHolder: string = '';
//   @Input() type: string | number = 'text';

//   constructor(@Self() public controlDir: NgControl) {
//     this.controlDir.valueAccessor = this;
//   }

//   writeValue(Obj: any): void { }
//   registerOnChange(fn: any): void { }
//   registerOnTouched(fn: any): void { }

//   get control(): FormControl {
//     return this.controlDir.control as FormControl
//   }

// }
