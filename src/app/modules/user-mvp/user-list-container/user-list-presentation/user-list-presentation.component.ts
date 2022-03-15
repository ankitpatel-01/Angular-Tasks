import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Department } from '../../models/dept.model';
import { User } from '../../models/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';

@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService],
})
export class UserListPresentationComponent implements OnInit {

  //  setter for user list 
  @Input() public set userList(value: User[] | null) {
    if (value) {
      this._userList = value;
      this.tempUserList = value;
    }
  }
  // getter for user list 
  public get userList(): User[] | null {
    return this._userList;
  }
  //  setter for department list 
  @Input() public set departmentList(value: Department[] | null) {
    if (value) {
      this._departmentList = value;
    }
  }
  // getter for department list 
  public get departmentList(): Department[] | null {
    return this._departmentList;
  }

  // emitter to emit add user data
  @Output() public addUser: EventEmitter<Event>;
  // emitter to emit edit user details 
  @Output() public editUserId: EventEmitter<number>;
  // emits user id to be deleted
  @Output() public deleteUserId: EventEmitter<number>;

  //user list we get from db
  private _userList: User[];
  //user list we get from db
  public _departmentList: Department[];
  // temp user list to display data in table
  public tempUserList: User[];
  // search field control
  public search: FormControl;


  constructor(private persenterService:UserListPresenterService) {
    this._userList = [];
    this._departmentList = [];
    this.deleteUserId = new EventEmitter();
    this.addUser = new EventEmitter();
    this.editUserId = new EventEmitter();
    this.search = new FormControl();
  }

  ngOnInit(): void {
    this.persenterService.delete$.subscribe({
      next:(id: number) => {
        this.deleteUserId.emit(id);
      },
      error:(e)=>{console.log(e)}
    });
    this.persenterService.edit$.subscribe({
      next:(id: number) => {
        this.editUserId.emit(id);
      },
      error:(e)=>{console.log(e)}
    })
    this.persenterService.add$.subscribe({
      next:(id: number) => {
        this.addUser.emit();
      },
      error:(e)=>{console.log(e)}
    });
  }

  onAddUser() {
    this.persenterService.addUser();
  }

  onEditUser(id: number) {
    this.persenterService.editUser(id);
  }

  onDeleteUser(id: number) {
    this.persenterService.deleteUser(id);
  }

}
