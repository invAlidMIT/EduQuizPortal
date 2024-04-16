import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubQuestionService } from '../../../services/sub-question.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-update-sub-question',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,
    MatFormFieldModule,FormsModule,MatInputModule
  ],
  templateUrl: './update-sub-question.component.html',
  styleUrl: './update-sub-question.component.css'
})
export class UpdateSubQuestionComponent implements OnInit {
  subQuestionId=0;
  subQuestion={
    qid:'',
      questionContent:'',
      co:'',
      btl:'',
      marks:'',
      parentQuestion:{
        qid:'',
        questionPaper:{
          qid:''
        }
      }
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subQuestionService: SubQuestionService
  ) { }

  ngOnInit(): void {
    this.subQuestionId = this.route.snapshot.params['qid'];
    this.loadSubQuestion();
  }

  loadSubQuestion(): void {
    this.subQuestionService.getSubQuestionById(this.subQuestionId).subscribe(
      (data: any) => {
        this.subQuestion = data;
        console.log(this.subQuestion);
      },
      error => {
        console.log('Error fetching sub-question:', error);
      }
    );
  }

  updateSubQuestion(): void {
    this.subQuestionService.updateSubQuestion(this.subQuestionId, this.subQuestion).subscribe(
      () => {
        console.log('Sub-question updated successfully.');
        this.router.navigate(['/adminDashboard/questionPapers/view-questionPaper-questions', this.subQuestion.parentQuestion.questionPaper.qid]);
  
      },
      error => {
        console.log('Error updating sub-question:', error);
      }
    );
  }
}