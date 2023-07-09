import { AbstractControl, ValidatorFn } from '@angular/forms';

export function gte(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const age = new Date().getFullYear() - new Date(control.value).getFullYear();

    if (isNaN(age) || age < minAge) {
      return { gte: true, isButton: true };
    }

    return null;
  };
}
