import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasWeServiceComponent } from './areas-we-service.component';

describe('AreasWeServiceComponent', () => {
  let component: AreasWeServiceComponent;
  let fixture: ComponentFixture<AreasWeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasWeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasWeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
