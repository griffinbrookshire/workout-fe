import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutListItemComponent } from './workout-list-item.component';

describe('WorkoutListItemComponent', () => {
  let component: WorkoutListItemComponent;
  let fixture: ComponentFixture<WorkoutListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
