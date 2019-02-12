import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramelessPageComponent } from './frameless-page.component';

describe('FramelessPageComponent', () => {
  let component: FramelessPageComponent;
  let fixture: ComponentFixture<FramelessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramelessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramelessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
