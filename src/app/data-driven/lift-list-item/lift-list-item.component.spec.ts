import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftListItemComponent } from './lift-list-item.component';

describe('LiftListItemComponent', () => {
  let component: LiftListItemComponent;
  let fixture: ComponentFixture<LiftListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiftListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiftListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
