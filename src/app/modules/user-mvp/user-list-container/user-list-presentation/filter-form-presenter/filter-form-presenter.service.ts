import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class FilterFormPresenterService {

  public userFormData: Subject<any>;
  public userFormData$: Observable<any>;

  constructor(private fb:FormBuilder) {
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();
    this.userFormData$ = this.userFormData.asObservable();
   }

  public buildForm() {
    return this.fb.group({
      gender: [null],
      // department: [null],
      isPermanent: [false],
      isMarried: [false],
      isAvailable: [false],
    })
  }


  public onFormSubmit(filterFormData:FormGroup) {
    this.userFormData.next(filterFormData.value);
  }
}
