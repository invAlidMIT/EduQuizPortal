import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { QuizService } from '../../../services/quiz.service';

@Component({
  selector: 'app-quiz-instructions',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatIconModule
  ,MatButtonModule],
  templateUrl: './quiz-instructions.component.html',
  styleUrl: './quiz-instructions.component.css'
})
export class QuizInstructionsComponent implements OnInit {

  qid:any;
  quiz=
    {
      qid:'',
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:'',
      category:{
        cid:'',
        title:'',
        description:''
      }
    }
  
  constructor(private route:ActivatedRoute,private quizService:QuizService){}
  ngOnInit(): void {
    this.qid=this.route.snapshot.params['qid'];
    this.quizService.getQuiz(this.qid).subscribe(
      (data:any)=>{
        this.quiz=data;
        console.log(this.quiz);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
