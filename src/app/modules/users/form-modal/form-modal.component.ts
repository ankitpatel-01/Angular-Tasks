
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
  
  @Input() id: number = 0;
  public userForm: FormGroup;
  public departments: Department[];
  private isAddMode: boolean;

  @Output() cancel; 
  @Output() saveUser; 

  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.userForm = this.buildUsersForm();
    this.departments = [];
    this.isAddMode = !this.id;
    this.cancel = new EventEmitter<String>();
    this.saveUser = new EventEmitter<User>();
  }


  //On init get department list and ckeck if its addMode
  ngOnInit(): void {
    this.getDepartmentList();
    if (!this.isAddMode) {
      this.usersService.getById(this.id).subscribe(x => this.userForm.patchValue(x));
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


  //get department list from db
  private getDepartmentList(): void {
    this.usersService.getDepartments().subscribe({
      next:(data: Department[]) => {
        this.departments = data;
      },
      error:(e) => console.log(e)
    });
  }


  //on Form submit
  public onSubmit(user : User): void {
    this.saveUser.emit()
    // if (this.isAddMode) {
    //   this.createUser();
    // }
    // else {
    //   this.updateUser();
    // }
  }


  //Post data to db
  public createUser(): void {
    this.usersService.createUser(this.userForm.value).subscribe({
      next:() => {
        alert("New User Creadted");
      },
      error:(e) => console.log(e)
    });
  }

  //Put data to db
  public updateUser(): void {
    this.usersService.updateUser(this.id, this.userForm.value).subscribe({
      next: () => {
        alert("User Updated");
      },
      error: (e) => console.log(e)
    })
  }

  //Rest to form controls
  onRest() {
    this.userForm.reset();
  }

  onCancel(event: Event){
    console.log("cancel click");
    return this.cancel.emit();
  }

}
