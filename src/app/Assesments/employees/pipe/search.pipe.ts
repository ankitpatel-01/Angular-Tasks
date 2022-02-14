import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  // transform(list: Employee[], value: string[], key: string[]): Employee[] {
   
  //   value.forEach((name:string, index:number) => {
  //     if (name) {
  //       list = list.filter((item:Employee) => {
  //         return (item[key]
  //           .toString()
  //           .toLowerCase()
  //           .indexOf(name.toString().toLowerCase()) !== -1)
  //       });
  //     }
  //   });
  //   return list;

  //   return list
  transform(users: Employee[], searchText: string): Employee[]{

    if (searchText === "") {
      return users;
    }
    return users.filter((user: Employee) => {
      return user.name.toLowerCase().match(searchText.toLowerCase())
    })

  }
}