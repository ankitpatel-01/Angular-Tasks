import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs';
import { Department } from '../../models/dept.model';
import { Filters, User } from '../../models/user.model';
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

  @Output() public deleteUserId: EventEmitter<number>;

  //user list we get from db
  private _userList: User[];
  //user list we get from db
  public _departmentList: Department[];
  // search field control
  public search: FormControl;


  constructor(private persenterService: UserListPresenterService) {
    this._userList = [];
    this._departmentList = [];
    this.deleteUserId = new EventEmitter();
    this.search = new FormControl();
  }

  ngOnInit(): void {
    this.persenterService.delete$.subscribe({
      next: (id: number) => {
        this.deleteUserId.emit(id);
      },
      error: (e) => { console.log(e) }
    });

    this.persenterService.filters$.subscribe({
      next: (res:Filters) => {
        console.log("filterform", res)
        this.filterData(res)
      },
      error: (e) => {
        console.log(e);
      }
    })
  }

  onDeleteUser(id: number) {
    this.persenterService.deleteUser(id);
  }

  openFilter() {
    this.persenterService.openFilter();
  }

  filterData(filters:any){

    debugger

    let filterdata:User[] = this._userList;
    
    let keys = Object.keys(filters);

    keys.forEach(key=>{
      if(filters[key]){
        filterdata = filterdata.filter((item:any) => {
          return item[key] === filters[key];
        })
      }
    })

    this._userList = filterdata;

  }

}
