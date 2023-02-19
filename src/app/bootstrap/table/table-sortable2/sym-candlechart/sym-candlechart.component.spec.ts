import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymCandlechartComponent } from './sym-candlechart.component';

describe('SymCandlechartComponent', () => {
  let component: SymCandlechartComponent;
  let fixture: ComponentFixture<SymCandlechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymCandlechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymCandlechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
