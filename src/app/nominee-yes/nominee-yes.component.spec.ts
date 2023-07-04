import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeYesComponent } from './nominee-yes.component';

describe('NomineeYesComponent', () => {
  let component: NomineeYesComponent;
  let fixture: ComponentFixture<NomineeYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineeYesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineeYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
