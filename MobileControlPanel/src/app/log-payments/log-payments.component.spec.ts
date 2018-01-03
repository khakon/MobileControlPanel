import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogPaymentsComponent } from './log-payments.component';

describe('LogPaymentsComponent', () => {
  let component: LogPaymentsComponent;
  let fixture: ComponentFixture<LogPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
