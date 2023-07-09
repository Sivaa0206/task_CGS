import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeEditComponent } from './nominee-edit.component';

describe('NomineeEditComponent', () => {
  let component: NomineeEditComponent;
  let fixture: ComponentFixture<NomineeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
