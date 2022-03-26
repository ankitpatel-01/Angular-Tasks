import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Department } from '../../models/dept.model';
import { Filters, User } from '../../models/user.model';
import { FilterFormPresentationComponent } from '../user-list-presentation/filter-form-presentation/filter-form-presentation.component';

@Injectable()
export class UserListPresenterService {
  
  //store the current filter object
  private _currentFilters: Filters;

  private delete: Subject<number>;
  public delete$: Observable<number>;

  private _filtersData: Subject<User[]>;
  public filtersData$: Observable<User[]>;

  private _isfiltered: Subject<boolean>;
  public isfiltered$: Observable<boolean>;

  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this._filtersData = new Subject();
    this.filtersData$ = new Observable();
    this.filtersData$ = this._filtersData.asObservable();

    this._isfiltered = new Subject();
    this.isfiltered$ = new Observable();
    this.isfiltered$ = this._isfiltered.asObservable();
  }

  public deleteUser(id: string) {
    this.delete.next(id);
  }

  filterData(filters: any, list: User[]) {

    //if all filters were remove and submitted
    let noFilters = Object.values(filters).every((el)=>{
      if(el ==null || el == false || el == ""){
        return true;
      }
      return false;
    });

    //filter data list copy of original list
    let filterdata: User[] = JSON.parse(JSON.stringify(list));

    //all keys of the filter object
    let keys: string[] = Object.keys(filters);

    //filter data as filter object
    keys.forEach((key: any) => {
      if (filters[key]) {
        filterdata = filterdata.filter((item: any) => {
          return item[key].toString().toLowerCase() === filters[key].toString().toLowerCase();
        })
      }
    })

    this._filtersData.next(filterdata);
    if(noFilters){
      this._isfiltered.next(false)
    }
    else{
      this._isfiltered.next(true)
    }

  }

  public openFilter(department: Department[], list: User[]) {
    //config of overlay
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().centerHorizontally().right();

    //create overlay with above config
    const overlayRef = this.overlay.create(config);

     //component to open in overlay
    const Filtercomponent = new ComponentPortal(FilterFormPresentationComponent);
    const FiltercomponentRef = overlayRef.attach(Filtercomponent);

    //send department list to filter form
    FiltercomponentRef.instance._departmentList = department;

    //if there is a filter object send form its previous filter
    if (this._currentFilters) {
      FiltercomponentRef.instance.pevfilters = this._currentFilters;
    }

    //backdrop click close overlay
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });

    //get the filter form data 
    FiltercomponentRef.instance.filterData.subscribe({
      next: (res: Filters) => {
        this._currentFilters = res;
        //called the filter mentod
        this.filterData(this._currentFilters, list);
        overlayRef.detach();
      },
      error: (e: any) => {
        console.log(e)
      },
    })

    //reset filter as send the original list back to list presentation
    FiltercomponentRef.instance.restFilter.subscribe({
      next: (res: any) => {
        this._currentFilters = res;
        //original list
        this._filtersData.next(list);
        //is filter false
        this._isfiltered.next(false)
        overlayRef.detach();
      },
      error: (e: any) => {
        console.log(e)
      },
    })
  }
}
