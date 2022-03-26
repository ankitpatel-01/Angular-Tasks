import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';
import { Department } from '../models/dept.model';
import { User } from '../models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  // user list data
  public userList$: Observable<User[]>

  // department list data
  public departmentList$: Observable<Department[]>;

  constructor(private userService: UserService, private overlay: Overlay) {
    this.userList$ = new Observable();
    this.departmentList$ = new Observable();
  }

  ngOnInit(): void {
    this.userList$ = this.userService.getUsers();
    this.departmentList$ = this.userService.getDepartments();
  }


  //delete user confirmation pop up
  public deleteUserPopUp(id: number):void {
    //overlay configs
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.maxWidth = "400px";
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    //create overlay with above config
    const overlayRef = this.overlay.create(config);
    //component to open in overlay
    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = overlayRef.attach(component);

    //close overlay base on value yes and no
    componentRef.instance.value.subscribe((value: boolean) => {
      if (value) {
        //yes delete user with id
        this.deleteUser(id);
        overlayRef.detach()
      }
      else {
        overlayRef.detach()
      }
    })

    //backdrop click close overlay
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }

  // delete user method for service call
  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        this.userList$ = this.userService.getUsers();
      },
      error: (e) => { console.log(e) }
    })
  }

}
