import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { QuestionsService } from '../../../services/questions.service';
import { SubQuestionService } from '../../../services/sub-question.service';


@Component({
  selector: 'app-add-qestions-to-questin-paper',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatIconModule,MatButtonModule,RouterLink
  ,MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './add-qestions-to-questin-paper.component.html',
  styleUrl: './add-qestions-to-questin-paper.component.css'
})

export class AddQestionsToQuestinPaperComponent implements OnInit{

  questionPaperId: number = 0;
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

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService,
    private router:Router,
    private subQuestionService:SubQuestionService
  ) {}

  ngOnInit(): void {
    this.questionPaperId =this.route.snapshot.params['qid'];
  }


  addQuestion() {
    this.question.questionPaper.qid = this.questionPaperId;

    this.questionsService.addQuestion(this.question).subscribe(
      (data) => {
        console.log('Question added successfully:', data);
        this.addSubQuestions(data.qid);
        this.router.navigate(['/adminDashboard/questionPapers/viewQuestionPaper', this.questionPaperId]);
      },
      
      (error) => {
        console.error('Error adding question:', error);
        
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