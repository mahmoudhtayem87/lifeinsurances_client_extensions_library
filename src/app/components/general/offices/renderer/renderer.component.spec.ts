import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendererComponent } from './renderer.component';

describe('RendererComponent', () => {
  let component: RendererComponent;
  let fixture: ComponentFixture<RendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendererComponent]
    });
    fixture = TestBed.createComponent(RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
