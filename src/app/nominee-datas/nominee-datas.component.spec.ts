import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomineeDatasComponent } from './nominee-datas.component';

describe('NomineeDatasComponent', () => {
  let component: NomineeDatasComponent;
  let fixture: ComponentFixture<NomineeDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomineeDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomineeDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
