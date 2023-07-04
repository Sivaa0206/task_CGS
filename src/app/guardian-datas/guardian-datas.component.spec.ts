import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardianDatasComponent } from './guardian-datas.component';

describe('GuardianDatasComponent', () => {
  let component: GuardianDatasComponent;
  let fixture: ComponentFixture<GuardianDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardianDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardianDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
