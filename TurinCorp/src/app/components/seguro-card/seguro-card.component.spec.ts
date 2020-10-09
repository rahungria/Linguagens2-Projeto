import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroCardComponent } from './seguro-card.component';

describe('SeguroCardComponent', () => {
  let component: SeguroCardComponent;
  let fixture: ComponentFixture<SeguroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
