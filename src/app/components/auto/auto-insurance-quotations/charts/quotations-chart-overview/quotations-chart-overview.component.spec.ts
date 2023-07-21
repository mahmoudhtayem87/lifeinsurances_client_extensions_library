import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationsChartOverviewComponent } from './quotations-chart-overview.component';

describe('QuotationsOverviewComponent', () => {
  let component: QuotationsChartOverviewComponent;
  let fixture: ComponentFixture<QuotationsChartOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotationsChartOverviewComponent]
    });
    fixture = TestBed.createComponent(QuotationsChartOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
