import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1orcComponent } from './l1orc.component';

describe('L1orcComponent', () => {
  let component: L1orcComponent;
  let fixture: ComponentFixture<L1orcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1orcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1orcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
