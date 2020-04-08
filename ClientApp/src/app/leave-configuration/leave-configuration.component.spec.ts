import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveCOnfigurationComponent } from './leave-configuration.component';

describe('LeaveCOnfigurationComponent', () => {
  let component: LeaveCOnfigurationComponent;
  let fixture: ComponentFixture<LeaveCOnfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveCOnfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveCOnfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
