import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from '../../models/dept.model';
import { User } from '../../models/user.model';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.scss'],
  viewProviders: [UserFormPresenterService],
})
export class UserFormPresentationComponent implements OnInit {

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

  /** setter for user data */
  @Input() public set editData(value: User | null) {
    if (value) {
      this.formTitle = 'Edit User';
      this.formMode = 'Edit';
      this._editData = value;
      this.userForm.patchValue(value);
    }
  }
  public get userData(): User {
    return this._editData;
  }

  @Output() addUser : EventEmitter<User>;
  @Output() editUser : EventEmitter<User>;


  //store form data
  private formData: User;
  /** ttile of form */
  public formTitle: string;
  /** ttile of form */
  public formMode: string;
  /** user form */
  public userForm: FormGroup;
  
  //user list we get from db
  public _departmentList: Department[];
   /** user data */
  private _editData: User;
  //to check form mode

  constructor(private userFormPresenterService: UserFormPresenterService) {
    this.formTitle = 'Add User';
    this.formMode = 'Add';
    this.userForm = this.userFormPresenterService.buildForm();
    this.addUser = new EventEmitter<User>();
    this.editUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
      this.userFormPresenterService.userFormData$.subscribe({
        next:(data)=>{
          if(this._editData){
            this.editUser.emit(data)
          }
          else{
            this.addUser.emit(data)
          }
        },
        error:(e)=>{
          console.log(e);
        }
      })
  }

  /** on submit button click */
  public onSubmit() {
    if(this.formMode == "Add"){
      this.formData = this.userForm.value;
    }
    else{
      this.formData = this.userForm.value;
      this.formData.id = this._editData.id;
    }
    this.userFormPresenterService.onFormSubmit(this.formData)
  }

  // /** on cancel button click */
  // public onCancel() {
  //   this.cancel.emit(new Date());
  // }

  onReset() {
    this.userForm.reset();
  }
}
