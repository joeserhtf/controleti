import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScComponent } from './modal-sc.component';

describe('ModalScComponent', () => {
  let component: ModalScComponent;
  let fixture: ComponentFixture<ModalScComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalScComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalScComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
