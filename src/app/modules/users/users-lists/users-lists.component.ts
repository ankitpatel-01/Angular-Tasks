import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss']
})
export class UsersListsComponent implements OnInit {

  myUsers:User[]=[];

  searchText:string= "";

  
  constructor(private router: Router, private usersServices:UsersService) { }

  //On Component Init Load User data
  ngOnInit(): void {
      this.getUserList();
  }

  //get user list from db
  getUserList(){
    this.usersServices.getUsers().subscribe(data=>this.myUsers=data)
  }

  //Delete user from db and Update user list
  deleteUser(id:number){
    this.usersServices.deleteUser(id).subscribe(()=>{this.getUserList()})
  }

  //filtering result
  searchFor(){
      if(this.searchText!=""){
        this.myUsers = this.myUsers.filter((user:User)=>{
          return user.firstname.toLowerCase().match(this.searchText.toLowerCase())
         })
      }
      else{
        this.ngOnInit()
      }
  }

  //ROUTE to form
  navigateToForm(){
    this.router.navigate(['/users/add'])
  }
}
