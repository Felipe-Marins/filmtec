import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAtorComponent } from './add-ator.component';

describe('AddAtorComponent', () => {
  let component: AddAtorComponent;
  let fixture: ComponentFixture<AddAtorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAtorComponent]
    });
    fixture = TestBed.createComponent(AddAtorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
