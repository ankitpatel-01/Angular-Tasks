import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Filters } from '../../../models/user.model';

@Injectable()
export class FilterFormPresenterService {

  private userFormData: Subject<Filters>;
  public userFormData$: Observable<Filters>;

  constructor(private fb:FormBuilder) {
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();
    this.userFormData$ = this.userFormData.asObservable();
   }

  //form group for filter form
  public buildForm() {
    return this.fb.group({
      gender: [null],
      department: [null],
      isPermanent: [false],
      isMarried: [false],
      isAvailable: [false],
    })
  }
  
  public onFormSubmit(filterFormData:FormGroup) {
    this.userFormData.next(filterFormData.value);
  }
}
