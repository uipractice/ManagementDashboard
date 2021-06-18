import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewsNotificationsComponent } from './create-news-notifications.component';

describe('CreateNewsNotificationsComponent', () => {
  let component: CreateNewsNotificationsComponent;
  let fixture: ComponentFixture<CreateNewsNotificationsComponent>;

  beforeEach(async(() => {
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
