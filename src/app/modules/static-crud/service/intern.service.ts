import { Injectable } from '@angular/core';
import { find, Observable, of } from 'rxjs';
import { Intern, INTERNS } from '../mock/intern.mock';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  public interns = INTERNS;

  constructor() { }

  get() {
    return this.interns;
  }

  getById(id: number): Intern {
    let data = this.interns.find((intern) => intern.id == id);
    return data as Intern;
  }

  add(newIntern: Intern) {
    if (this.interns.length > 0) {
      newIntern.id = this.interns.slice(-1)[0].id + 1;
    }
    else {
      newIntern.id = 1;
    }
    this.interns.push(newIntern);
  }

  update(id: number, intern: Intern) {
    try {
      let internIndex = this.interns.findIndex((intern => intern.id == id));
      this.interns[internIndex] = intern;
      this.interns[internIndex].id = id;
      console.log(this.interns[internIndex])
    }
    catch (err) {
      console.log('Error: ', err);
    }
  }

  delete(id: number) {
    let index = this.interns.findIndex((intern => intern.id == id));
    this.interns.splice(index, 1);
  }
}
