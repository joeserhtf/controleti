import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CretiraComponent } from './cretira.component';

describe('CretiraComponent', () => {
  let component: CretiraComponent;
  let fixture: ComponentFixture<CretiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CretiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CretiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
