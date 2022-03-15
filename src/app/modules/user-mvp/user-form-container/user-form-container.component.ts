import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Department } from '../models/dept.model';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.scss']
})
export class UserFormContainerComponent implements OnInit {

  private id: number;
  private isAddMode: boolean;

  public departmentList$: Observable<Department[]>;
  public editData$: Observable<User>

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = true;
  }

  ngOnInit(): void {
    this.departmentList$ = this.userService.getDepartments();
    if (this.id) {
      this.isAddMode = false;
      this.editData$ = this.userService.getById(this.id);
    }
  }

  addUser(user:User){
    this.userService.createUser(user).subscribe({
      next:()=>{
        this.router.navigate(["/userMvp"]);
      }
    })
  }

  editUser(user:User){
    this.userService.createUser(user).subscribe({
      next:()=>{
        this.router.navigate(["/userMvp"]);
      }
    })
  }

}
