import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorcamentoComponent } from './corcamento.component';

describe('CorcamentoComponent', () => {
  let component: CorcamentoComponent;
  let fixture: ComponentFixture<CorcamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorcamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorcamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
