import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerQuotationComponent } from './customer-quotation.component';

describe('QuotationComponent', () => {
  let component: CustomerQuotationComponent;
  let fixture: ComponentFixture<CustomerQuotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerQuotationComponent]
    });
    fixture = TestBed.createComponent(CustomerQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
