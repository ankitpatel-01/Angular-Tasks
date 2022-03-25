import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department } from '../../../models/dept.model';
import { Filters } from '../../../models/user.model';
import { FilterFormPresenterService } from '../filter-form-presenter/filter-form-presenter.service';

@Component({
  selector: 'app-filter-form-presentation',
  templateUrl: './filter-form-presentation.component.html',
  styleUrls: ['./filter-form-presentation.component.scss'],
  viewProviders: [FilterFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormPresentationComponent implements OnInit {


  //get department list
  @Input() _departmentList:Department[];
  //get previous filter
  @Input() pevfilters:Filters;
  //send the filterdata to list presenter
  @Output() filterData: EventEmitter<Filters>;
  //reset the filter
  @Output() restFilter:EventEmitter<Date>;
  public filterForm: FormGroup;

  constructor(private filterPresenter: FilterFormPresenterService) {
    this.filterForm = this.filterPresenter.buildForm();
    this.filterData = new EventEmitter();
    this.restFilter = new EventEmitter<Date>();
  }

  ngOnInit(): void {
    
    if(this.pevfilters){
      this.filterForm.patchValue(this.pevfilters);
    }

    this.filterPresenter.userFormData$.subscribe({
      next:(data)=>{
        this.filterData.emit(data);
      },
      error:(e)=>{
        console.log(e);
      }
    })
  }

  public onSubmit(){
    this.filterPresenter.onFormSubmit(this.filterForm);
  }

  public onRest(){
    this.filterForm.reset();
    this.restFilter.emit(new Date);
  }
}
