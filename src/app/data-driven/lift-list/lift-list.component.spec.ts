import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftListComponent } from './lift-list.component';

describe('LiftListComponent', () => {
  let component: LiftListComponent;
  let fixture: ComponentFixture<LiftListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
