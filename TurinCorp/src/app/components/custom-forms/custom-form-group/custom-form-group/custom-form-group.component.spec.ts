import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFormGroupComponent } from './custom-form-group.component';

describe('CustomFormGroupComponent', () => {
  let component: CustomFormGroupComponent;
  let fixture: ComponentFixture<CustomFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
