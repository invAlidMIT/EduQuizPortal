import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttemptedQuizResultComponent } from './view-attempted-quiz-result.component';

describe('ViewAttemptedQuizResultComponent', () => {
  let component: ViewAttemptedQuizResultComponent;
  let fixture: ComponentFixture<ViewAttemptedQuizResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAttemptedQuizResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAttemptedQuizResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
