import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpapplyleaveComponent } from './empapplyleave.component';

describe('EmpapplyleaveComponent', () => {
  let component: EmpapplyleaveComponent;
  let fixture: ComponentFixture<EmpapplyleaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpapplyleaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpapplyleaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
