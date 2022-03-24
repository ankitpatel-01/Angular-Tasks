import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { User } from '../../models/user.model';

@Injectable()
export class UserFormPresenterService {

  public userFormData: Subject<User>;
  public userFormData$: Observable<User>;

  constructor(private fb: FormBuilder) { 
    this.userFormData = new Subject();
    this.userFormData$ = new Observable();
    this.userFormData$ = this.userFormData.asObservable();
  }

  public buildForm() {
    return this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required, Validators.minLength(10)]],
      gender: [null, Validators.required],
      doj: [null, Validators.required],
      department: [1, Validators.required],
      isPermanent: [false],
      isMarried: [false],
      isAvailable: [false],
    })
  }

  public onFormSubmit(user:User) {
    this.userFormData.next(user);
  }
}
