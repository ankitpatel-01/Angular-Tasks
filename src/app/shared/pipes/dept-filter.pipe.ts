import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deptFilter'
})
export class DeptFilterPipe implements PipeTransform {

  transform(id: number, dept: any[]): string | undefined {

    return dept.find(x => x.id == id)?.name;
  }
}
