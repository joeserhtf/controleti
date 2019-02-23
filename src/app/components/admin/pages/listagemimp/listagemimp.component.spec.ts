import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemimpComponent } from './listagemimp.component';

describe('ListagemimpComponent', () => {
  let component: ListagemimpComponent;
  let fixture: ComponentFixture<ListagemimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
