import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionTriggerComponent } from './exception-trigger.component';

describe('ExceptionTriggerComponent', () => {
  let component: ExceptionTriggerComponent;
  let fixture: ComponentFixture<ExceptionTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
