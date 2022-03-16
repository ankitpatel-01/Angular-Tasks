import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class UserListPresenterService {

  private delete: Subject<string>;
  public delete$: Observable<string>;

  constructor() {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();
  }

  public deleteUser(id: string) {
    this.delete.next(id);
  }
}
