import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DataModalComponent } from './data-modal.component';

describe('DataModalComponent', () => {
  let component: DataModalComponent;
  let fixture: ComponentFixture<DataModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DataModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
