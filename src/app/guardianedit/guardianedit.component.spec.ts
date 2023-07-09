import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianeditComponent } from './guardianedit.component';

describe('GuardianeditComponent', () => {
  let component: GuardianeditComponent;
  let fixture: ComponentFixture<GuardianeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
