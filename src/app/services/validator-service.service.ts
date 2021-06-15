import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value === undefined) {
      return null;
    }

    var res = new RegExp("^(?:(?=[a-zA-Z0-9._]{5,35}$)(?!.*[_.]{2})[^_.].*[^_.]|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4})$");

    var emailValid = res.test(control.value);
    console.log(emailValid);

    if (control.value !== undefined && (!emailValid)) {
      return { 'ageRange': true };
    }
    return null;

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

