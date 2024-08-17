import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms'



export function emailValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const valid = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-z]{2,30})$/g.test(control.value);
  return valid
    ? null
    : { invalidEmail: { valid: false, value: control.value } }
}
