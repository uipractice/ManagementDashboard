import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardHrComponent } from './dashboard-hr.component';

describe('DashboardHrComponent', () => {
  let component: DashboardHrComponent;
  let fixture: ComponentFixture<DashboardHrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
