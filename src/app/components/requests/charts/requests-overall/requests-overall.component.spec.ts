import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsOverallComponent } from './requests-overall.component';

describe('RequestsOverallComponent', () => {
  let component: RequestsOverallComponent;
  let fixture: ComponentFixture<RequestsOverallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestsOverallComponent]
    });
    fixture = TestBed.createComponent(RequestsOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
