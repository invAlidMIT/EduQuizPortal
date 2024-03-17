import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionsOfQuestionPaperComponent } from './update-questions-of-question-paper.component';

describe('UpdateQuestionsOfQuestionPaperComponent', () => {
  let component: UpdateQuestionsOfQuestionPaperComponent;
  let fixture: ComponentFixture<UpdateQuestionsOfQuestionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateQuestionsOfQuestionPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateQuestionsOfQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
