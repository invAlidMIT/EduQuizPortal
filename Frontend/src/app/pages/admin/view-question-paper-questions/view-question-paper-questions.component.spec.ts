import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionPaperQuestionsComponent } from './view-question-paper-questions.component';

describe('ViewQuestionPaperQuestionsComponent', () => {
  let component: ViewQuestionPaperQuestionsComponent;
  let fixture: ComponentFixture<ViewQuestionPaperQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQuestionPaperQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewQuestionPaperQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
