import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasattComponent } from './caixasatt.component';

describe('CaixasattComponent', () => {
  let component: CaixasattComponent;
  let fixture: ComponentFixture<CaixasattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaixasattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaixasattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
