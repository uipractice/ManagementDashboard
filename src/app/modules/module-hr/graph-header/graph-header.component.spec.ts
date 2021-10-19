import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraphHeaderComponent } from './graph-header.component';

describe('GraphHeaderComponent', () => {
  let component: GraphHeaderComponent;
  let fixture: ComponentFixture<GraphHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
