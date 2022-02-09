import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.model';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users: User[], searchText: string): User[]{

    if (searchText === "") {
      return users;
    }
    return users.filter((user: User) => {
      return user.firstname.toLowerCase().match(searchText.toLowerCase())
    })

  }

}
