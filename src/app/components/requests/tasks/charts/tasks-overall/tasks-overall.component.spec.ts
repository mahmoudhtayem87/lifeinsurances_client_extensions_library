import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOverallComponent } from './tasks-overall.component';

describe('TasksOverallComponent', () => {
  let component: TasksOverallComponent;
  let fixture: ComponentFixture<TasksOverallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksOverallComponent]
    });
    fixture = TestBed.createComponent(TasksOverallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
