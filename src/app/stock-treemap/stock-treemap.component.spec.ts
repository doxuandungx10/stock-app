import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockTreemapComponent } from './stock-treemap.component';

describe('StockTreemapComponent', () => {
  let component: StockTreemapComponent;
  let fixture: ComponentFixture<StockTreemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTreemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTreemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
