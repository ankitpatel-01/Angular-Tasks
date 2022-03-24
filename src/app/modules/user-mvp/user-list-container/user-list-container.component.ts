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

  public departmentList$: Observable<Department[]>;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute, private overlay: Overlay) {
    this.userList$ = new Observable();
  }

  ngOnInit(): void {
    this.userList$ = this.userService.getUsers();
    this.departmentList$ = this.userService.getDepartments();
  }

  public deleteUserPopUp(id: number) {
    let config = new OverlayConfig();

    config.hasBackdrop = true;
    config.maxWidth = "400px";
    config.positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance.value.subscribe((value: boolean) => {
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


  public deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      error: (e) => { console.log(e) }
    })
  }

}
