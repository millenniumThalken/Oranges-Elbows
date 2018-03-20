import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrewComponent } from './modal-crew.component';

describe('ModalCrewComponent', () => {
  let component: ModalCrewComponent;
  let fixture: ComponentFixture<ModalCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
