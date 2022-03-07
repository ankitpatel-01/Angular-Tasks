import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
// ===============================================================
import { Component, OnInit } from '@angular/core';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
import { FormModalComponent } from '../form-modal/form-modal.component';
// ===============================================================
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

  private edituserdata: User;



  constructor(private usersServices: UsersService, private overlay: Overlay) {
    this.myUsers = [];
    this.departments = [];
    this.searchText = "";
    this.currentPage = 1;
    this.dataPerPage = 8;
    this.edituserdata = {} as User;
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

  //Post data to db
  public createUser(data: User): void {
    this.usersServices.createUser(data).subscribe({
      next: () => {
        alert("New User Creadted");
        this.getUserList();
      },
      error: (e) => console.log(e)
    });
  }

  //Put data to db
  public updateUser(id: number, user: User): void {
    this.usersServices.updateUser(id, user).subscribe({
      next: () => {
        alert("User Updated");
        this.getUserList();
      },
      error: (e) => console.log(e)
    })
  }

  //Delete user from db and Update user list
  public deleteUser(id: number): void {
    this.usersServices.deleteUser(id).subscribe({
      next: () => this.getUserList(),
      error: (e) => console.error(e),
    })
  }

  //edit user by id
  public editUser(id: number): void {
    this.usersServices.getById(id).subscribe({
      next: (data) => {
        this.edituserdata = data;
        this.openFormModal(id);
      },
      error: (e) => console.error(e),
    })
  }

  //setCurrentPage
  public setCurrentPage(pageNo: number) {
    this.currentPage = pageNo;
  }

  //open the form
  public openFormModal(id?: number) {

    //config of overlay
    let config = new OverlayConfig();
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    const overlayRef = this.overlay.create(config);

    const component = new ComponentPortal(FormModalComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.departments = this.departments;

    if (id) {
      componentRef.instance.id = id;
      componentRef.instance.editData = this.edituserdata;
      componentRef.instance.userData.subscribe((data) => {
        overlayRef.detach();
        this.updateUser(id, data);
      })
    } else {
      componentRef.instance.userData.subscribe((data) => {
        overlayRef.detach();
        this.createUser(data);
      })
    }
    componentRef.instance.cancel.subscribe(() => overlayRef.detach());
  }

  //open delete Pop up box 
  public deletePopUp(id: number) {
    let config = new OverlayConfig();

    config.hasBackdrop = true;
    config.maxWidth = "400px";
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.value.subscribe((value) => {
      if (value) {
        this.deleteUser(id);
        overlayRef.detach()
      }
      else {
        overlayRef.detach()
      }
    })

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }
}
