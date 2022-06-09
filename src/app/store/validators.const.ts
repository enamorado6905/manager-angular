import { AbstractControl, ValidatorFn } from '@angular/forms';
export var email_Pattern: any =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export var UserName_Pattern = /^([a-z]{1}[a-z0-9_]+[\s]*)+$/;
export var Names_Pattern = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

export class ValidatorsUser {
  static isPresent(obj: any): boolean {
    return obj !== undefined && obj !== null;
  }
  //ADM
  static password_EqualsValidator(): ValidatorFn {
    return (control: AbstractControl): [key: string] | any => {
      if (!control?.value || !control.parent?.get('password')?.value) {
        return null;
      } else if (control.value !== control.parent.get('password')?.value) {
        return { password_equalsvalidator: true };
      } else {
        return null;
      }
    };
  }
}
