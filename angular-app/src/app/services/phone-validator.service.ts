import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms'



export function phoneNumberValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[(][0-9][0-9][0-9][)]\s[0-9][0-9][0-9][-][0-9][0-9][0-9][0-9]*$/g.test(control.value);
  return valid
    ? null
    : { invalidNumber: { valid: false, value: control.value } }
}
