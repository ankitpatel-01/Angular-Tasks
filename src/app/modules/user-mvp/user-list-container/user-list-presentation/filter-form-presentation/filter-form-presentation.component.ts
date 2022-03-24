import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
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


  @Output() filterData: EventEmitter<Filters>;
  public filterForm: FormGroup;

  constructor(private filterPresenter: FilterFormPresenterService) {
    this.filterForm = this.filterPresenter.buildForm();
    this.filterData = new EventEmitter();
  }

  ngOnInit(): void {
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
}
