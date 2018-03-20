import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheCrewComponent } from './meet-the-crew.component';

describe('MeetTheCrewComponent', () => {
  let component: MeetTheCrewComponent;
  let fixture: ComponentFixture<MeetTheCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetTheCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTheCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
