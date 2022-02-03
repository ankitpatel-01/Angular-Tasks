import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../models/dept.model';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {

  userForm: FormGroup;

  departments: Department[] = [];

  constructor(private fb:FormBuilder, private usersService: UsersService,private router: Router) { 
    this.userForm = this.buildUsersForm()
  }

  ngOnInit(): void {
    this.usersService.getDepartments().subscribe((data: Department[])=>{
      this.departments = data;
      console.log(this.departments);
    })  
  }

  buildUsersForm():FormGroup {
    return this.fb.group({
      firstname:[null,[Validators.required]],
      lastname:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      phoneNo:[null,[Validators.required,Validators.minLength(10)]],
      gender:[null,Validators.required],
      doj:[null,Validators.required],
      department:['Frontend',Validators.required],
    });
  }


  saveUser(){
    console.log(this.userForm.value)
    this.router.navigate(['/users/user-list'])
    this.usersService.createUser(this.userForm.value).subscribe((r)=>{
      console.log('Post updated successfully!');
    })
  }

  onRest():void{
    this.userForm.reset();
    console.log(this.departments)
  }
}
