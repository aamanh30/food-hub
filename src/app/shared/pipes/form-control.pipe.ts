import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, UntypedFormControl } from '@angular/forms';

@Pipe({
  name: 'formControl'
})
export class FormControlPipe implements PipeTransform {
  transform(
    control: AbstractControl<unknown, unknown> | null
  ): UntypedFormControl {
    return !control
      ? new UntypedFormControl(undefined)
      : <UntypedFormControl>control;
  }
}
