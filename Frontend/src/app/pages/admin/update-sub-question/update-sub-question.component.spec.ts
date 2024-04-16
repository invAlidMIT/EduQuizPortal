import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSubQuestionComponent } from './update-sub-question.component';

describe('UpdateSubQuestionComponent', () => {
  let component: UpdateSubQuestionComponent;
  let fixture: ComponentFixture<UpdateSubQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSubQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSubQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
