import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Questions } from '../../../model/questions.model';
import { QuestionsService } from '../../../services/questions.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionPaperService } from '../../../services/question-paper.service';
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-view-question-paper',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatIconModule,MatButtonModule,
  RouterLink],
  templateUrl: './view-question-paper.component.html',
  styleUrl: './view-question-paper.component.css'
})
export class ViewQuestionPaperComponent implements OnInit{

  constructor(private questionsService:QuestionsService,
    private route:ActivatedRoute,
    private questionPaperService:QuestionPaperService,
    private elementRef: ElementRef
    ){}

  ngOnInit(): void {
    this.questionPaperId=this.route.snapshot.params['qid'];
    this.loadQuestions();
    this.loadQuestionPaper();
  }

  questionPaperId=0;
  questions: Questions[]=[
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
  ];

  questionPaper={
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
    maxMarks: 0
  }

  loadQuestions(): void {
    this.questionsService.getQuestionsOfQuestionPaper(this.questionPaperId).subscribe(
      (data: Questions[]) => {
        this.questions = data;
      },
      error => {
        console.log('Error fetching questions:', error);
      }
    );
  }

  loadQuestionPaper(){
    this.questionPaperService.getQuestionPaperById(this.questionPaperId)
    .subscribe((data)=>{
      this.questionPaper=data;
    },
    (error)=>{
      console.log(error);
    }
    )
  }

  downloadQuestionPaper() {
    const options = {
      margin: [10,10],
      filename: 'question_paper.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { width: 880, scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true, floatPrecision: 16 },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    const element = this.elementRef.nativeElement.querySelector('.question-paper');

    html2pdf()
      .from(element)
      .set(options)
      .save();
  }
}


