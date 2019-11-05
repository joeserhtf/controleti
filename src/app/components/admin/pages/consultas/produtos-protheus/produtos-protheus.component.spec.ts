import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosProtheusComponent } from './produtos-protheus.component';

describe('ProdutosProtheusComponent', () => {
  let component: ProdutosProtheusComponent;
  let fixture: ComponentFixture<ProdutosProtheusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosProtheusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosProtheusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
