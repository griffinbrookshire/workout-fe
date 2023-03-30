import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutDetailsPageComponent } from './workout-details-page.component';

describe('WorkoutDetailsPageComponent', () => {
  let component: WorkoutDetailsPageComponent;
  let fixture: ComponentFixture<WorkoutDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
