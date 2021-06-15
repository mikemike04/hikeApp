import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value === undefined) {
      return null;
    }

    let res = new RegExp("^(?:(?=[a-zA-Z0-9._]{5,35}$)(?!.*[_.]{2})[^_.].*[^_.]|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})$");

    let emailValid = res.test(control.value);
    console.log(emailValid);

    if (control.value !== undefined && (!emailValid)) {
      return { 'ageRange': true };
    }
    return null;

  }

  patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        // if control is empty return no error
        return null as any;
      }

      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);

      // if true, return no error (no error), else return error passed in the second parameter
      return valid ? null as any : error;
    };
  }

  elevationValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min || control.value > max)) {
        return { 'elevationRange': true };
      }
      return null;
    }

  }

  lengthValidator(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value !== undefined && (isNaN(control.value) || control.value < min)) {
        return { 'lengthRange': true };
      }
      return null;
    }

  }
}

