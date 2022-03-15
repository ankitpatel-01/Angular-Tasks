import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class UserListPresenterService {

  private add: Subject<number>;
  public add$: Observable<number>;

  private delete: Subject<number>;
  public delete$: Observable<number>;

  private edit: Subject<number>;
  public edit$: Observable<number>;

  constructor() { 
    this.add = new Subject();
    this.add$ = new Observable();
    this.add$ = this.add.asObservable();

    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this.edit = new Subject();
    this.edit$ = new Observable();
    this.edit$ = this.edit.asObservable();
  }

  public deleteUser(id: number) {
    this.delete.next(id);
  }

  public editUser(id: number) {
    this.edit.next(id);
  }

  public addUser(){
    this.add.next(1);
  }
}
