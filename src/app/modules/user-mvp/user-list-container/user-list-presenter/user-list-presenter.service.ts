import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Filters } from '../../models/user.model';
import { FilterFormPresentationComponent } from '../user-list-presentation/filter-form-presentation/filter-form-presentation.component';

@Injectable()
export class UserListPresenterService {

  private delete: Subject<number>;
  public delete$: Observable<number>;

  private _filters: Subject<any>;
  public filters$: Observable<any>;

  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this._filters = new Subject();
    this.filters$ = new Observable();
    this.filters$ = this._filters.asObservable();
  }

  public deleteUser(id: number) {
    this.delete.next(id);
  }


  public openFilter() {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    const overlayRef = this.overlay.create(config);

    const Filtercomponent = new ComponentPortal(FilterFormPresentationComponent);
    const FiltercomponentRef = overlayRef.attach(Filtercomponent);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    FiltercomponentRef.instance.filterData.subscribe({
      next: (res:Filters) => {
        this._filters.next(res);
        overlayRef.detach();
      },
      error:(e:any)=>{
        console.log(e)
      },
    })
  }
}
