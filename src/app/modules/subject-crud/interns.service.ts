import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { Intern, INTERNS } from './mock/intern.mock';

@Injectable()
export class InternsService {

  //static interns array
  public interns = INTERNS;

  private _data: BehaviorSubject<Intern[]>
  public data$: Observable<Intern[]>;

  private _editData: Subject<Intern>;
  public editData$: Observable<Intern>;

  //next id to add in intern
  private nextId = 5;

  constructor() {
    this._data = new BehaviorSubject<Intern[]>(this.interns);
    this.data$ = new Observable<Intern[]>();
    this.data$ = this._data.asObservable();

    this._editData = new Subject<Intern>();
    this.editData$ = new Observable<Intern>();
    this.editData$ = this._editData.asObservable();
  }

  /**
   * To send data to form component
   * @param intern:Intern
   */
  sendDataToEdit(intern: Intern) {
    this._editData.next(intern);
  }

  /**
   * To add intern data in the list (array)
   * @param item:Intern
   */
  add(item: Intern) {
    item.id = ++this.nextId;
    this.interns.push(item);
    this._data.next(this.interns);
  }

  /**
   * To intern delete data with id
   * @param id :number
   */
  delete(id: number) {
    let index = this.interns.findIndex((intern => intern.id == id));
    this.interns.splice(index, 1);
  }

  /**
   * To edit the existing intern in list
   * @param id : number
   * @param intern : Intern
   */
  edit(id: number, intern: Intern) {
    let internIndex = this.interns.findIndex((intern => intern.id == id));
    this.interns[internIndex] = intern;
    this.interns[internIndex].id = id;
  }

}
