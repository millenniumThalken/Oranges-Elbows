import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaHeaderComponent } from './social-media-header.component';

describe('SocialMediaHeaderComponent', () => {
  let component: SocialMediaHeaderComponent;
  let fixture: ComponentFixture<SocialMediaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
