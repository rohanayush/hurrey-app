import { AbstractControl } from "@angular/forms";

const creditCardRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
const cvvRegex = /^[0-9]{3,4}$/;

export function creditCardValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && !creditCardRegex.test(control.value)) {
      return { 'invalidCreditCard': true };
    }
    return null;
  }
  
  export function cvvValidator(control: AbstractControl): { [key: string]: any } | null {
    if (control.value && !cvvRegex.test(control.value)) {
      return { 'invalidCVV': true };
    }
    return null;
  }
  