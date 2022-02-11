import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/dept.model';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {

  public userForm: FormGroup;
  public departments: Department[] = [];
  private id: number;
  private isAddMode: boolean;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute,) {
    this.userForm = this.buildUsersForm();
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
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
    this.usersService.getDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
      }
    );
  }


  //on Form submit
  public onSubmit(): void {
    if (this.isAddMode) {
      this.createUser();
    }
    else {
      this.updateUser();
    }
  }


  //Post data to db
  public createUser(): void {
    this.usersService.createUser(this.userForm.value).subscribe(() => {
      alert("New User Creadted");
      this.navigateToList();
    }
    );
  }

  //Put data to db
  public updateUser(): void {
    this.usersService.updateUser(this.id, this.userForm.value).subscribe(() => {
      alert("User Updated");
      this.navigateToList();
    })
  }

  //route to users list
  public navigateToList(): void {
    this.router.navigate(['/users'])
  }

  //Rest to form controls
  onRest() {
    this.userForm.reset();
  }
}
