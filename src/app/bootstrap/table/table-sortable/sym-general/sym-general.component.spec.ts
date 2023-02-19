import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymGeneralComponent } from './sym-general.component';

describe('SymGeneralComponent', () => {
  let component: SymGeneralComponent;
  let fixture: ComponentFixture<SymGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
