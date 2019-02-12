import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsPageComponent } from './pets-page.component';

describe('PetsPageComponent', () => {
  let component: PetsPageComponent;
  let fixture: ComponentFixture<PetsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
