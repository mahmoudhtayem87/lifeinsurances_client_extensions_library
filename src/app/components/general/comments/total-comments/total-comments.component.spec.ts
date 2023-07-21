import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCommentsComponent } from './total-comments.component';

describe('TotalCommentsComponent', () => {
  let component: TotalCommentsComponent;
  let fixture: ComponentFixture<TotalCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalCommentsComponent]
    });
    fixture = TestBed.createComponent(TotalCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
