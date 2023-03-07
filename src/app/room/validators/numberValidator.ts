import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isNumber = /^\d+$/.test(control.value);
    return isNumber ? null : { 'notNumber': { value: control.value } };
  };
}
