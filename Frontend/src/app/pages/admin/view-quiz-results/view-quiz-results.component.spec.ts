import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizResultsComponent } from './view-quiz-results.component';

describe('ViewQuizResultsComponent', () => {
  let component: ViewQuizResultsComponent;
  let fixture: ComponentFixture<ViewQuizResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewQuizResultsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewQuizResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
