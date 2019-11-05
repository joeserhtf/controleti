import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpedidonComponent } from './cpedidon.component';

describe('CpedidonComponent', () => {
  let component: CpedidonComponent;
  let fixture: ComponentFixture<CpedidonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpedidonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpedidonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
