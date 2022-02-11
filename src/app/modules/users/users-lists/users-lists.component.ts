import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from '../models/dept.model';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss']
})
export class UsersListsComponent implements OnInit {

  public myUsers: User[] = [];
  public departments: Department[] = [];
  public searchText: string = "";


  constructor(private router: Router, private usersServices: UsersService) { }

  //On Component Init Load User data
  ngOnInit(): void {
    this.getDepartmentList();
    this.getUserList();
  }

  //get department list from db
  private getDepartmentList(): void {
    this.usersServices.getDepartments().subscribe(
      (data: Department[]) => {
        this.departments = data;
      }
    );
  }

  //get user list from db
  private getUserList(): void {
    this.usersServices.getUsers().subscribe(data => this.myUsers = data)
  }

  //Delete user from db and Update user list
  public deleteUser(id: number): void {
    this.usersServices.deleteUser(id).subscribe(() => { this.getUserList() })
  }

  //ROUTE to form
  navigateToForm() {
    this.router.navigate(['/users/add'])
  }

  //filtering result
  // searchFor() {
  //   if (this.searchText != "") {
  //     this.myUsers = this.myUsers.filter((user: User) => {
  //       return user.firstname.toLowerCase().match(this.searchText.toLowerCase())
  //     })
  //   }
  //   else {
  //     this.ngOnInit()
  //   }
  // }

}
