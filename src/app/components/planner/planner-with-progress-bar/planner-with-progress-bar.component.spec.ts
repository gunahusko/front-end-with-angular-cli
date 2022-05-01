import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerWithProgressBarComponent } from './planner-with-progress-bar.component';

describe('PlannerWithProgressBarComponent', () => {
  let component: PlannerWithProgressBarComponent;
  let fixture: ComponentFixture<PlannerWithProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlannerWithProgressBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerWithProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
