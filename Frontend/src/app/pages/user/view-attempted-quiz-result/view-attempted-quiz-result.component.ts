import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { QuizResultService } from '../../../services/quiz-result.service';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-attempted-quiz-result',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatButtonModule,CommonModule,FormsModule,RouterLink],
  templateUrl: './view-attempted-quiz-result.component.html',
  styleUrl: './view-attempted-quiz-result.component.css'
})
export class ViewAttemptedQuizResultComponent implements OnInit{


  public constructor(private loginService: LoginService,private quizResultService:
    QuizResultService ,private router:ActivatedRoute){
    
  }

  result={
    username:"",
    marksGot:"",
    attempted:"",
    correctAnswers:"",
    quiz:{
      qid:''
    }
  }

  qid=this.router.snapshot.params['qid'];

  ngOnInit(): void {
    this.quizResult();
  }

  quizResult() {
    const username = this.loginService.getUser();
      this.quizResultService.checkUserAttemptedQuiz(username.username, this.qid).subscribe(
        (result: any) => {
         this.result=result;
        },
        (error) => {
          console.error( error);
        }
      );
    } 
  }




