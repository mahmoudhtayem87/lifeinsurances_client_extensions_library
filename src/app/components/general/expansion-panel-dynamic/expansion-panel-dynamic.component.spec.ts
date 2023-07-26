import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelDynamicComponent } from './expansion-panel-dynamic.component';

describe('ExpansionPanelDynamicComponent', () => {
  let component: ExpansionPanelDynamicComponent;
  let fixture: ComponentFixture<ExpansionPanelDynamicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelDynamicComponent]
    });
    fixture = TestBed.createComponent(ExpansionPanelDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
