import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarObrasComponent } from './listar-obras.component';

describe('ListarObrasComponent', () => {
  let component: ListarObrasComponent;
  let fixture: ComponentFixture<ListarObrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarObrasComponent]
    });
    fixture = TestBed.createComponent(ListarObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
