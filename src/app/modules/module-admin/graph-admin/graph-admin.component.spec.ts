import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphAdminComponent } from './graph-admin.component';

describe('GraphAdminComponent', () => {
  let component: GraphAdminComponent;
  let fixture: ComponentFixture<GraphAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
