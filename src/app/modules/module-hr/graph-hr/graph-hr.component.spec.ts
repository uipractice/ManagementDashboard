import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHrComponent } from './graph-hr.component';

describe('GraphHrComponent', () => {
  let component: GraphHrComponent;
  let fixture: ComponentFixture<GraphHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
