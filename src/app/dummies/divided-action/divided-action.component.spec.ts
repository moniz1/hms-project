import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividedActionComponent } from './divided-action.component';

describe('DividedActionComponent', () => {
  let component: DividedActionComponent;
  let fixture: ComponentFixture<DividedActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividedActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividedActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
