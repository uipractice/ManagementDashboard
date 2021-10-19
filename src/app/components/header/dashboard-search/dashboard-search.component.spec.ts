import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DashboardSearchComponent } from './dashboard-search.component';

describe('DashboardSearchComponent', () => {
  let component: DashboardSearchComponent;
  let fixture: ComponentFixture<DashboardSearchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
