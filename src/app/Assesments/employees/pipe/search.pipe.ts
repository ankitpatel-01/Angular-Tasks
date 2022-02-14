import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any[], value: string[], key: string[]): any {
    value.forEach((value, index) => {
      if (value) {
        list = list.filter((item) => {
          return (item[key[index]].toString().toLowerCase().match(value.toString().toLowerCase()))
        });
      }
    });
    return list;

}
}