import {NG_VALIDATORS, FormControl, ValidatorFn, Validator} from '@angular/forms';
import {Directive} from '@angular/core';
import {FormValidationService} from '../shared/services/form-validation.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[nameValidator] [ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NameValidator,
      multi: true
    }
  ]
})
export class NameValidator implements Validator {
  public validator: ValidatorFn;

  constructor(private formValidationService: FormValidationService) {
    this.validator = this.nameValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  public nameValidator(): ValidatorFn {
    return (c: FormControl) => {
      if (this.formValidationService.isNameValid(c.value)) {
        return null;
      } else {
        return {
          nameValidator: {
            valid: false
          }
        };
      }
    };
  }
}
