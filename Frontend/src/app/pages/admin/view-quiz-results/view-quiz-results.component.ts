import { Component } from '@angular/core';
import { QuizResultService } from '../../../services/quiz-result.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-view-quiz-results',
  standalone: true,
  imports: [CommonModule,FormsModule,MatCardModule,MatButtonModule],
  templateUrl: './view-quiz-results.component.html',
  styleUrl: './view-quiz-results.component.css'
})
export class ViewQuizResultsComponent {
  quizResult = [{
    id: '', 
    username: '',
    marksGot: '',
    attempted: '',
    correctAnswers: '',
    quiz: {
      qid: '',
      title: '',
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
      category: {
        title: ''
      }
    }
  }];

  constructor(
    private quizResultService: QuizResultService,
    private route: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.loadQuizResults();
  }

  loadQuizResults() {
    
    const qid = this.route.snapshot.paramMap.get('qid');
    this.quizResultService.getQuizResultsOfQuiz(qid).subscribe(
      (data: any) => {
        this.quizResult = data;
      },
      (error) => {
        Swal.fire('Error', 'Failed to load quiz results', 'error');
        console.error(error);
      }
    );
  }
}