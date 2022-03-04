import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormModalComponent } from '../form-modal/form-modal.component';
import { Department } from '../models/dept.model';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss']
})
export class UsersListsComponent implements OnInit {

  public myUsers: User[];
  public departments: Department[];
  public searchText: string;

  public currentPage: number;
  public dataPerPage: number;
  


  constructor(private router: Router, private usersServices: UsersService , private overlay: Overlay) {
    this.myUsers = [];
    this.departments = [];
    this.searchText = "";
    this.currentPage = 1;
    this.dataPerPage = 8;
  }

  //On Component Init Load User data
  ngOnInit(): void {
    this.getDepartmentList();
    this.getUserList();
  }

  //get department list from db
  private getDepartmentList(): void {
    this.usersServices.getDepartments().subscribe({
      next: (data: Department[]) => {
        this.departments = data;
      },
      error: (e) => console.error(e),
    });
  }

  //get user list from db
  private getUserList(): void {
    this.usersServices.getUsers().subscribe({
      next: data => this.myUsers = data,
      error: e => console.error(e),
    })
  }

  //Delete user from db and Update user list
  public deleteUser(id: number): void {
    this.usersServices.deleteUser(id).subscribe({
      next: () => this.getUserList(),
      error: (e) => console.error(e),
    })
  }

  //ROUTE to form
  public navigateToForm(): void {
    this.router.navigate(['/users/add'])
  }

  //setCurrentPage
  public setCurrentPage(pageNo: number) {
    this.currentPage = pageNo;
  }

  //
  public openFormModal(){
     const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().right()
    });
    const component = new ComponentPortal(FormModalComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.cancel.subscribe(() => overlayRef.detach());
  }
}
