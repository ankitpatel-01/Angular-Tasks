import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/dept.model';
import { UsersService } from '../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css'],
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup;

  departments: Department[] = [];

  id: number;
  isAddMode: boolean;

  constructor(private fb: FormBuilder, private usersService: UsersService, private router: Router, private route: ActivatedRoute,) {
    this.userForm = this.buildUsersForm();
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.isAddMode)
  }

  ngOnInit(): void {
    this.getDepartmentList();
    if (!this.isAddMode) {
      this.usersService.getById(this.id).subscribe(x => this.userForm.patchValue(x));
    }
  }

  buildUsersForm(): FormGroup {
    return this.fb.group({
      firstname: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required, Validators.minLength(10)]],
      gender: [null, Validators.required],
      doj: [null, Validators.required],
      department: ['Frontend', Validators.required],
    });
  }

  getDepartmentList() {
    this.usersService.getDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
      }
    );
  }

  onSubmit(){
    if(this.isAddMode){
      this.createUser();
    }
    else{
      this.updateUser();
    }
  }

  createUser() {
    this.usersService.createUser(this.userForm.value).subscribe(() => {
        alert("New User Creadted");
        this.navigateToList();
      }
    );
  }

  updateUser(){
    this.usersService.updateUser(this.id, this.userForm.value).subscribe(()=>{
      alert("User Updated");
      this.navigateToList();
    })
  }

  navigateToList(){
    this.router.navigate(['/users'])
  }

  onRest(): void {
    this.userForm.reset();
  }
}
