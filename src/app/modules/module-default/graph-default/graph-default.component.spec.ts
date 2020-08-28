import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphDefaultComponent } from './graph-default.component';

describe('GraphDefaultComponent', () => {
  let component: GraphDefaultComponent;
  let fixture: ComponentFixture<GraphDefaultComponent>;

  beforeEach(async(() => {
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
