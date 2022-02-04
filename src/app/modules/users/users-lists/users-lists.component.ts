import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.css']
})
export class UsersListsComponent implements OnInit {

  myUsers:User[]=[];
  constructor(private router: Router, private usersServices:UsersService) { }

  ngOnInit(): void {
      this.getUserList();
  }


  getUserList(){
    this.usersServices.getUsers().subscribe(data=>this.myUsers=data)
    
  }

  deleteUser(id:number){
    this.usersServices.deleteUser(id).subscribe(()=>{this.getUserList()})
  }

  navigateToForm(){
    this.router.navigate(['/users/add'])
  }
}
