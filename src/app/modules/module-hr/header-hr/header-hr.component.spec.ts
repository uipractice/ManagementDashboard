import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHrComponent } from './header-hr.component';

describe('HeaderHrComponent', () => {
  let component: HeaderHrComponent;
  let fixture: ComponentFixture<HeaderHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
