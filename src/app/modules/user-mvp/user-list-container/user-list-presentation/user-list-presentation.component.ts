import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Department } from '../../models/dept.model';
import { User } from '../../models/user.model';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';


@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.scss'],
  viewProviders: [UserListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListPresentationComponent implements OnInit {

  //setter for user list 
  @Input() public set userList(value: User[] | null) {
    if (value) {
      this._userList = value;
      this.tempList = this._userList;
    }
  }
  //getter for user list 
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

  //user id to delete
  @Output() public deleteUserId: EventEmitter<number>;

  //user list we get from db
  private _userList: User[];

  //temp user list for tempelate
  public tempList: User[];

  //user list we get from db
  public _departmentList: Department[];

  // search field control
  public search: FormControl;

  //condition for the filter notification badge
  public isFilterOn: boolean;

  constructor(private persenterService: UserListPresenterService) {
    this._userList = [];
    this.tempList = [];
    this._departmentList = [];
    this.deleteUserId = new EventEmitter();
    this.search = new FormControl();
    this.isFilterOn = false;
  }

  ngOnInit(): void {

    this.persenterService.delete$.subscribe({
      next: (id: number) => {
        this.deleteUserId.emit(id);
      },
      error: (e) => { console.log(e) }
    });

    this.persenterService.filtersData$.subscribe({
      next: (data: User[]) => {
        this.tempList = data;
      },
      error: (e) => {
        console.log(e);
      }
    })

    this.persenterService.isfiltered$.subscribe({
      next: (value) => {
        this.isFilterOn = value;
      },
      error: (e) => {
        console.log(e)
      }
    })
  }

  //Delete user
  onDeleteUser(id: number) {
    this.persenterService.deleteUser(id);
  }

  //open filter box
  openFilter() {
    this.persenterService.openFilter(this._departmentList, this._userList);
  }

}
