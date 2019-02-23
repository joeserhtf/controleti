import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCustoHistoricoComponent } from './modal-custo-historico.component';

describe('ModalCustoHistoricoComponent', () => {
  let component: ModalCustoHistoricoComponent;
  let fixture: ComponentFixture<ModalCustoHistoricoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCustoHistoricoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCustoHistoricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
