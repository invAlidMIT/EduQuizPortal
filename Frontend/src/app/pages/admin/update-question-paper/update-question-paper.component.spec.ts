import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuestionPaperComponent } from './update-question-paper.component';

describe('UpdateQuestionPaperComponent', () => {
  let component: UpdateQuestionPaperComponent;
  let fixture: ComponentFixture<UpdateQuestionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateQuestionPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
