import { NG_VALIDATORS, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
/*import * as BytePushers from 'bytepushers-js-core';*/
import {FormValidationService} from "../shared/services/form-validation.service";


@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[phoneNumberValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNumberValidator,
      multi: true
    }
  ]
})
export class PhoneNumberValidator implements Validator {
  public validator: ValidatorFn;
  constructor(private formValidationService: FormValidationService) {
    this.validator = this.phoneNumberValidator();
  }

  validate(c: FormControl): {[key: string]: any} | null {

    return this.validator(c);
  }

  public phoneNumberValidator(): ValidatorFn {
    return (c: FormControl) => {
      const invalidPhoneNumberResult = {
        phoneNumberValidator: {
          valid: false,
          value: c.value
        }
      };
      let isValid = false;

      /* Muted references to bytepushers modules in order to bypass error, it is somehow conflicting with the
      .length and in turn affecting the router.*/

      if (this.formValidationService.isPhoneNumberValid(c.value)) {
        /*const formattedNumber = BytePushers.PhoneNumberUtility.formatPhoneNumber({value: c.value});*/
        const formattedNumber = this.formValidationService.formatPhoneNumber(c.value);

        if (formattedNumber !== undefined) {
          c.setValue(formattedNumber);
          isValid = true;
        } else {
          isValid = false;
        }
      } else {
        isValid = false;
      }

      if (isValid) {
        return null;
      } else {
        return invalidPhoneNumberResult;
      }
    };
  }
}
