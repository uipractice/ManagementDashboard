import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderDefaultComponent } from './header-default.component';

describe('HeaderDefaultComponent', () => {
  let component: HeaderDefaultComponent;
  let fixture: ComponentFixture<HeaderDefaultComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
