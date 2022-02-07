import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deptFilter'
})
export class DeptFilterPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return null;
  }

}
