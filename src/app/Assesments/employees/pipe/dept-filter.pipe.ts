import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../models/model';

@Pipe({
  name: 'deptFilter'
})
export class DeptFilterPipe implements PipeTransform {

  transform(id: number, dept: Department[]): string | undefined {

    return dept.find(x => x.id == id)?.name;
  }
}
