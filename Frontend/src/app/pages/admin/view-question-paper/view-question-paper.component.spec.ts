import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionPaperComponent } from './view-question-paper.component';

describe('ViewQuestionPaperComponent', () => {
  let component: ViewQuestionPaperComponent;
  let fixture: ComponentFixture<ViewQuestionPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQuestionPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewQuestionPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
