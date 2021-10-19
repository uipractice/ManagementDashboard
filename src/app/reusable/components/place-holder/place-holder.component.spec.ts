import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PlaceHolderComponent } from './place-holder.component';

describe('PlaceHolderComponent', () => {
  let component: PlaceHolderComponent;
  let fixture: ComponentFixture<PlaceHolderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
