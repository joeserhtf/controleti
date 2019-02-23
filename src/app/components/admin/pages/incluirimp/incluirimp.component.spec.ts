import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirimpComponent } from './incluirimp.component';

describe('IncluirimpComponent', () => {
  let component: IncluirimpComponent;
  let fixture: ComponentFixture<IncluirimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
