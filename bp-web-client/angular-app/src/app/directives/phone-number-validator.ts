import { NG_VALIDATORS, FormControl, ValidatorFn, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { FormValidationService } from '../shared/services/form-validation.service';
import * as BytePushers from 'bytepushers-js-core';

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
      const validPhoneNumberResult = {
        phoneNumberValidator: {
          valid: true,
          value: c.value
        }
      };
      let isValid = false;

      if (this.formValidationService.isPhoneNumberValid(c.value)) {
        const formattedNumber = BytePushers.PhoneNumberUtility.formatPhoneNumber({value: c.value});

        if (formattedNumber !== undefined) {
          validPhoneNumberResult.phoneNumberValidator.value = formattedNumber;
          isValid = true;
          //this.replacePhoneNumber(object.value, null);
        } else {
          isValid = false;
        }
      } else {
        isValid = false;
      }

      if (isValid) {
        return null; // validPhoneNumberResult;
      } else {
        return invalidPhoneNumberResult;
      }
    };
  }

 /* replacePhoneNumberMethod is intended to bring both the value created
  from the formatter as well as the value from the the input here itll replace the value from the input
    with our newly created one.*/

  public replacePhoneNumber(formattedValue, $event): void {
    document.body.innerHTML = document.body.innerHTML.replace($event, formattedValue);
    return $event;
  }


}
