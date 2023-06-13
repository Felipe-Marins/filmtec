import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFilmeComponent } from './add-filme.component';

describe('AddFilmeComponent', () => {
  let component: AddFilmeComponent;
  let fixture: ComponentFixture<AddFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddFilmeComponent]
    });
    fixture = TestBed.createComponent(AddFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
