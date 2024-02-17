import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormGroup, UntypedFormGroup } from '@angular/forms';

@Pipe({
  name: 'formGroup'
})
export class FormGroupPipe implements PipeTransform {
  transform(group: AbstractControl<unknown, unknown> | null): UntypedFormGroup {
    return !group ? new UntypedFormGroup({}) : <UntypedFormGroup>group;
  }
}
