import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComnunicationComponent } from './comnunication.component';

describe('ComnunicationComponent', () => {
  let component: ComnunicationComponent;
  let fixture: ComponentFixture<ComnunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComnunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComnunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
