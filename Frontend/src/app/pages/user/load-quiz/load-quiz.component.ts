import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../../services/quiz.service';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-load-quiz',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatIconModule,MatButtonModule],
  templateUrl: './load-quiz.component.html',
  styleUrl: './load-quiz.component.css'
})
export class LoadQuizComponent implements OnInit{
  cId:any;
  quizzes=[
    {
      qid:'',
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active:'',
      category:{
        title:''
      }
    }
  ]
  constructor(private route:ActivatedRoute,private quiz:QuizService){}


  ngOnInit(): void {
     this.cId=this.route.snapshot.params['cId'];
      if(this.cId==0){
        this.quiz.display().subscribe((data:any)=>{
          this.quizzes=data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
        }
        )
      }
      else{

      }
  }

}
