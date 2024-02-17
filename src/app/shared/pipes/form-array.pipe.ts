import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formArray'
})
export class FormArrayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
