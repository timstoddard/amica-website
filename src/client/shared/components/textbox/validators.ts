import { AbstractControl, FormArray, FormGroup, ValidatorFn } from 'react-reactive-form'

// assumes password fields are siblings in the same form
export const stringMatch = (otherFieldName: string): ValidatorFn =>
  (c: AbstractControl | FormGroup | FormArray) => {
    return c.parent && c.value !== c.parent.get(otherFieldName).value
      ? { stringMatch: true }
      : null
  }
