import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQestionsToQuestinPaperComponent } from './add-qestions-to-questin-paper.component';

describe('AddQestionsToQuestinPaperComponent', () => {
  let component: AddQestionsToQuestinPaperComponent;
  let fixture: ComponentFixture<AddQestionsToQuestinPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddQestionsToQuestinPaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddQestionsToQuestinPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
