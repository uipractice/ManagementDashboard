import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraphItComponent } from './graph-it.component';

describe('GraphItComponent', () => {
  let component: GraphItComponent;
  let fixture: ComponentFixture<GraphItComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
