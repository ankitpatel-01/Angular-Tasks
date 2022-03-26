import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormPresentationComponent } from './filter-form-presentation.component';

describe('FilterFormPresentationComponent', () => {
  let component: FilterFormPresentationComponent;
  let fixture: ComponentFixture<FilterFormPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFormPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFormPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
