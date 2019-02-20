import { AbstractControl, FormArray, FormGroup, ValidatorFn } from 'react-reactive-form'

// assumes password fields are siblings in the same form
// TODO the control this is on doesn't update when the sibling is changed (even if status should change)
export const stringMatch = (otherFieldName: string): ValidatorFn =>
  (c: AbstractControl | FormGroup | FormArray) => {
    return c.parent && c.value !== c.parent.get(otherFieldName).value
      ? { stringMatch: true }
      : null
  }
