import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListQuotationsComponent } from './list-quotations.component';

describe('ListQuotationsComponent', () => {
  let component: ListQuotationsComponent;
  let fixture: ComponentFixture<ListQuotationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListQuotationsComponent]
    });
    fixture = TestBed.createComponent(ListQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
