import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraphDefaultComponent } from './graph-default.component';

describe('GraphDefaultComponent', () => {
  let component: GraphDefaultComponent;
  let fixture: ComponentFixture<GraphDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
