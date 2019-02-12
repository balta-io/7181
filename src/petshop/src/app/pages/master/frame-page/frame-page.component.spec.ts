import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramePageComponent } from './frame-page.component';

describe('FramePageComponent', () => {
  let component: FramePageComponent;
  let fixture: ComponentFixture<FramePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
