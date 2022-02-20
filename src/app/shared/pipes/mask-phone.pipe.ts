import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone'
})
export class MaskPhonePipe implements PipeTransform {

  transform(value: string): string {
    return value = value.replace(/(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
  }
}
