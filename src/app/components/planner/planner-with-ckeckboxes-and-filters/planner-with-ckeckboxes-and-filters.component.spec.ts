import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithCkeckboxesAndFiltersComponent } from './planner-with-ckeckboxes-and-filters.component';

describe('PlannerWithCkeckboxesAndFiltersComponent', () => {
  let component: PlannerWithCkeckboxesAndFiltersComponent;
  let fixture: ComponentFixture<PlannerWithCkeckboxesAndFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithCkeckboxesAndFiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithCkeckboxesAndFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
