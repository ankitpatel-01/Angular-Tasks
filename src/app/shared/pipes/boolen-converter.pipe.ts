import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolenConverter'
})
export class BoolenConverterPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {

    if (value === true) {
      return "Yes"
    }
    if (value === false) {
      return "No"
    }
    else {
      return value;
    }
  }
}
