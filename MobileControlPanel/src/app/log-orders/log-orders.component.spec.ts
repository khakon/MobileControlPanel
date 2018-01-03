import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOrdersComponent } from './log-orders.component';

describe('LogOrdersComponent', () => {
  let component: LogOrdersComponent;
  let fixture: ComponentFixture<LogOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
