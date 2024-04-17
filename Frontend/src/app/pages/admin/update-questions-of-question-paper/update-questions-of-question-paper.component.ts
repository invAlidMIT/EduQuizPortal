import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { QuestionsService } from '../../../services/questions.service';
import { SubQuestionService } from '../../../services/sub-question.service';

@Component({
  selector: 'app-update-questions-of-question-paper',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,CommonModule,
  MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './update-questions-of-question-paper.component.html',
  styleUrl: './update-questions-of-question-paper.component.css'
})
export class UpdateQuestionsOfQuestionPaperComponent implements OnInit {

  question:any= {
    marks: 0,
    co: '',
    btl: '',
    questionContent: '',
    questionPaper: {
      qid: 0
    },
    subQuestions: [{
      qid:'',
      questionContent:'',
      co:'',
      btl:'',
      marks:'',
      parentQuestion:{
        qid:''
      }
    }] 
  };
  questionPaperId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private questionsService: QuestionsService,
    private subQuestionService:SubQuestionService
  ) { }

  ngOnInit(): void {
   this.questionPaperId=this.route.snapshot.params['qid'];
   this.question.qid=this.route.snapshot.params['id'];
    this.question.questionPaper.qid=this.questionPaperId;
  }


  updateQuestion() {
    console.log(this.updateQuestion);
    this.questionsService.updateQuestion(this.question.qid, this.question).subscribe(
      (updatedQuestion) => {
        this.router.navigate(['/adminDashboard/questionPapers/view-questionPaper-questions',this.questionPaperId]); 
        this.addSubQuestions(this.question.qid);
      },
      (error) => {
        console.error('Error updating question:', error);
      }
    );
  }

  addSubQuestions(questionId: number) {
   
    this.question.subQuestions.forEach((subQuestion: any) => {
      subQuestion.parentQuestion = { qid: questionId };
      this.subQuestionService.addSubQuestion(subQuestion).subscribe(
        (data) => {
          console.log('Sub-question added successfully:', data);
        },
        (error) => {
          console.error('Error adding sub-question:', error);
        }
      );
    });

    this.router.navigate(['/adminDashboard/questionPapers/viewQuestionPaper', this.questionPaperId]);
  }

  addSubQuestion() {

    this.question.subQuestions.push({
      marks: 0,
      co: '',
      btl: '',
      questionContent: ''
    });
  }
}
