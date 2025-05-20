// select-dropdown.component.ts
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Option {
  value: any;
  label: string;
}

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [NgIf, NgFor, FontAwesomeModule, NgStyle],
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropdownComponent),
      multi: true,
    },
  ],
})
export class SelectDropdownComponent implements ControlValueAccessor, OnInit {
  @Input() options: Option[] = [];
  @Input() placeHolder = 'Select an option';
  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  selectedOption: Option | undefined;
  private onChange: any = () => { };
  private onTouched: any = () => { };
  faCaretRight = faCaretRight;

  ngOnInit() {

  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: Option) {
    this.selectedOption = option;
    this.onChange(option.value);
    this.onTouched();
    this.isOpen = false;
    this.selectionChange.emit(option.value);
  }

  writeValue(value: any) {
    this.selectedOption = this.options.find((option) => option.value === value);
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
