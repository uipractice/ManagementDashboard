import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewsNotificationModalComponent } from './news-notification-modal.component';

describe('NewsNotificationModalComponent', () => {
  let component: NewsNotificationModalComponent;
  let fixture: ComponentFixture<NewsNotificationModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsNotificationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsNotificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
