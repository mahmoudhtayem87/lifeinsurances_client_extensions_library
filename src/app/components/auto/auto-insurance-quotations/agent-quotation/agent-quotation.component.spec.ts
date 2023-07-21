import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentQuotationComponent } from './agent-quotation.component';

describe('AgentQuotationComponent', () => {
  let component: AgentQuotationComponent;
  let fixture: ComponentFixture<AgentQuotationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentQuotationComponent]
    });
    fixture = TestBed.createComponent(AgentQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
