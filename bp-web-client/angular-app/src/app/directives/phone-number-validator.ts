import {NG_VALIDATORS, FormControl, ValidatorFn, Validator} from '@angular/forms';
import {Directive} from '@angular/core';
import {FormValidationService} from '../shared/services/form-validation.service';
import * as BytePushers from 'bytepushers-js-core';
import {QuoteService} from '../shared/services/quote.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[phoneNumberValidator] [ngModel]',
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

  validate(c: FormControl) {
    return this.validator(c);
  }

  public phoneNumberValidator(): ValidatorFn {

    return (c: FormControl) => {
      if (this.formValidationService.isPhoneNumberValid(c.value)) {
        const object = {
          value: c.value
        };
        const formattedNumber = BytePushers.PhoneNumberUtility.formatPhoneNumber(object);
        object.value = formattedNumber;
        this.replacePhoneNumber(object.value, null);
        return object.value;

      } else {
        return {
          phoneNumberValidator: {
            valid: false
          }
        };
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
