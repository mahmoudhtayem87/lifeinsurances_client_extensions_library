import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestslistComponent } from './requestslist.component';

describe('RequestslistComponent', () => {
  let component: RequestslistComponent;
  let fixture: ComponentFixture<RequestslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestslistComponent]
    });
    fixture = TestBed.createComponent(RequestslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
