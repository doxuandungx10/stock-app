import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymFinanceComponent } from './sym-finance.component';

describe('SymFinanceComponent', () => {
  let component: SymFinanceComponent;
  let fixture: ComponentFixture<SymFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
