import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustofixoComponent } from './custofixo.component';

describe('CustofixoComponent', () => {
  let component: CustofixoComponent;
  let fixture: ComponentFixture<CustofixoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustofixoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustofixoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
