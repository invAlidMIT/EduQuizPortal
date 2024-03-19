import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import { QuestionPaperService } from '../../../services/question-paper.service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,
  CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit {
  totalQuizzes: number = 0;
  publishedQuizzes: number = 0;
  totalQuestionPapers: number = 0;

  constructor(private quizService: QuizService, private questionPaperService: QuestionPaperService) { }

  ngOnInit(): void {
    this.getQuizzes();
    this.getPublishedQuizzes();
    this.getQuestionPapers();
  }

  getQuizzes() {
    this.quizService.display().subscribe((data: any) => {
      this.totalQuizzes = data.length;
    });
  }

  getPublishedQuizzes() {
    this.quizService.getActiveQuizzes().subscribe((data: any) => {
      this.publishedQuizzes = data.length;
    });
  }

  getQuestionPapers() {
    this.questionPaperService.getAllQuestionPapers().subscribe((data: any) => {
      this.totalQuestionPapers = data.length;
    });
  }
}
