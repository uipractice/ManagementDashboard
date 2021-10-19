import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CreateNewsNotificationsComponent } from './create-news-notifications.component';

describe('CreateNewsNotificationsComponent', () => {
  let component: CreateNewsNotificationsComponent;
  let fixture: ComponentFixture<CreateNewsNotificationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewsNotificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
