
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/dept.model';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent implements OnInit {

  public modalTitle: string;
  public userForm: FormGroup;
  private isAddMode: boolean;

  @Input() public id: number = 0;
  @Input() public editData: User;
  @Input() public departments: Department[];

  @Output() public userData;
  @Output() public cancel;

  constructor(private fb: FormBuilder) {
    this.modalTitle = "Add User"
    this.userForm = this.buildUsersForm();
    this.editData = {} as User;
    this.departments = [];
    this.isAddMode = true;
    this.cancel = new EventEmitter<String>();
    this.userData = new EventEmitter<User>();
  }


  //On init get department list and ckeck if its addMode
  ngOnInit(): void {
    if (this.id != 0) {
      this.isAddMode = false
    }
    if (!this.isAddMode) {
      this.modalTitle = "Edit User";
      this.userForm.patchValue(this.editData);
    }
  }

  //Reactive Form
  private buildUsersForm(): FormGroup {
    return this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required, Validators.minLength(10)]],
      gender: [null, Validators.required],
      doj: [null, Validators.required],
      department: [1, Validators.required],
    });
  }

  //on Form submit
  public onSubmit(): void {
    this.userData.emit(this.userForm.value)
  }

  //Rest to form controls
  onRest() {
    this.userForm.reset();
  }

  //Close the form
  onCancel(event: Event) {
    console.log("cancel click");
    return this.cancel.emit();
  }

}
