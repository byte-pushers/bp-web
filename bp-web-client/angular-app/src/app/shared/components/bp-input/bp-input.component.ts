import { CommonModule, NgIf } from '@angular/common';
import { Component, EventEmitter, forwardRef, Input, Output, Self } from '@angular/core';
import { FormControl, FormsModule, NgControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-bp-input',
  standalone: true,
  imports: [CommonModule, NgIf, FormsModule, ReactiveFormsModule],
  templateUrl: './bp-input.component.html',
  styleUrl: './bp-input.component.scss',

})
export class BpInputComponent {
  @Input() label: string = '';
  @Input() placeHolder: string = '';
  @Input() type: string | number = 'text';

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  writeValue(Obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }

  get control(): FormControl {
    return this.controlDir.control as FormControl
  }

}
