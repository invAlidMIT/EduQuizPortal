import { Component, OnInit } from '@angular/core';
import { QuestionPaper } from '../../../model/question-paper.model';
import { Questions } from '../../../model/questions.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionPaperService } from '../../../services/question-paper.service';
import { QuestionsService } from '../../../services/questions.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Papa } from 'ngx-papaparse';
import { SubQuestionService } from '../../../services/sub-question.service';

@Component({
  selector: 'app-view-question-paper-questions',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,RouterLink,CommonModule],
  templateUrl: './view-question-paper-questions.component.html',
  styleUrl: './view-question-paper-questions.component.css'
})
export class ViewQuestionPaperQuestionsComponent implements OnInit{ 
selectedFile: File | null = null;
questionPaperId: number=0;
questionPaper: QuestionPaper={
  qid: 0,
  collegeName: "",
  institutionName: "",
  department: "",
  examType: "",
  semester: "",
  test: "",
  subjectCode: "",
  faculty: "",
  time: "",
  note: "",
  maxMarks: 0,
  questions: [
    {
      qid: 0,
      marks: 0,
      co: "",
      btl: "",
      questionContent: "",
      questionPaper:{
        qid: 0,
        collegeName: '',
        institutionName: '',
        department: '',
        examType: '',
        semester: '',
        test: '',
        subjectCode: '',
        faculty: '',
        time: '',
        note: '',
        maxMarks: 0,
        questions: []
      }
    }
  ]
};
questions: any[]=[
  {
    qid: 0,
    marks: 0,
    co: "",
    btl: "",
    questionContent: "",
    questionPaper:{
      qid: 0,
      collegeName: '',
      institutionName: '',
      department: '',
      examType: '',
      semester: '',
      test: '',
      subjectCode: '',
      faculty: '',
      time: '',
      note: '',
      maxMarks: 0,
      questions: []
    },
    subQuestion:[
      {
        qid: 0,
        marks: 0,
        co: "",
        btl: "",
        questionContent: "",
        parentQuestion:{
          qid:''
        }
      }
    ]
  }
];

constructor(
  private route: ActivatedRoute,
  private questionPaperService: QuestionPaperService,
  private questionsService: QuestionsService,
  private papa: Papa,
  private router: Router,
  private subQuestionService: SubQuestionService
) {
}


ngOnInit(): void {
    this.questionPaperId=this.route.snapshot.params['qid'];
    this.loadQuestionPaperDetails();
    this.loadQuestions();
}

loadQuestionPaperDetails(): void {
  this.questionPaperService.getQuestionPaperById(this.questionPaperId).subscribe(
    (data: QuestionPaper) => {
      this.questionPaper = data;
    },
    error => {
      console.log('Error fetching question paper details:', error);
    }
  );
}

loadQuestions(): void {
  this.questionsService.getQuestionsOfQuestionPaper(this.questionPaperId).subscribe(
    (data: any[]) => {
      this.questions = data;
      this.loadSubQuestionsForQuestions();
    },
    error => {
      console.log('Error fetching questions:', error);
    }
  );
}

loadSubQuestionsForQuestions(): void {
  this.questions.forEach(question => {
    this.subQuestionService.getSubQuestionsOfParentQuestion(question.qid).subscribe(
      (data: any[]) => {
        question.subQuestions = data; 
       },
      error => {
        console.log('Error fetching sub-questions:', error);
      }
    );
  });
}

deleteQuestion(questionId: number): void {
  if (confirm('Are you sure you want to delete this question?')) {
    this.questionsService.deleteQuestion(questionId).subscribe(
      () => {
        this.questions = this.questions.filter(question => question.qid !== questionId);
        console.log('Question deleted successfully.');
      },
      error => {
        console.log('Error deleting question:', error);
      }
    );
  }
}

deleteSubQuestion(subQuestionId: number): void {
  if (confirm('Are you sure you want to delete this sub-question?')) {
    this.subQuestionService.deleteSubQuestion(subQuestionId).subscribe(
      () => {
      
        this.questions.forEach(question => {
          question.subQuestions = question.subQuestions.filter((subQuestion: { qid: number; }) => subQuestion.qid !== subQuestionId);
        });
        console.log('Sub-question deleted successfully.');
      },
      error => {
        console.log('Error deleting sub-question:', error);
      }
    );
  }
}


isImporting: boolean = false;

handleFileInput(event: any) {
  this.isImporting = true; 
  const target = event.target;
  if (target.files && target.files.length > 0) {
    this.selectedFile = target.files[0];
    this.importQuestions();
    this.isImporting = false; 
  } else {
    console.error('No file selected.');
  }
}

importQuestions() {
  console.log('Importing questions...');
  if (!this.selectedFile) {
    console.error('No file selected.');
    return;
  }

  console.log('Selected file:', this.selectedFile);

  this.papa.parse(this.selectedFile, {
    delimiter: '|', 
    header: true,
    complete: (result) => {
      result.data.forEach((row: any) => {
        const newQuestion: Questions = {
          marks: row['Marks'],
          co: row['CO'],
          btl: row['BTL'],
          questionContent: row['Question'],
          qid: 0,
          questionPaper: new QuestionPaper
        };
        newQuestion.questionPaper.qid = this.questionPaperId;

        console.log('Adding question:', newQuestion);
        if(newQuestion.questionContent!=null && newQuestion.questionContent!=''){
          this.questionsService.addQuestion(newQuestion).subscribe(
            (data) => {
              this.loadQuestions();
            },
            (error) => {
              console.error('Error importing question:', error);
            }
          );
        }
      });
     
    }
  });
}
}