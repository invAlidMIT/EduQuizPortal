import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quiz',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,RouterLink,CommonModule],
  templateUrl: './view-quiz.component.html',
  styleUrl: './view-quiz.component.css'
})
export class ViewQuizComponent implements OnInit{
 
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
  constructor(private quizService:QuizService){}

  ngOnInit(): void {
    this.quizService.display().subscribe((data:any)=>{
      this.quizzes=data;
      console.log(this.quizzes);
    },
    (error)=>{
      Swal.fire('error occured','error');
      console.log(error);
    });
  }

  deleteQuiz(qid: any){

    Swal.fire({
      icon:"info",
      text:"Are you sure ?",
      confirmButtonText:"Delete",
      showCancelButton:true
    }).then((result)=>{
      this.quizService.deleteQuiz(qid)
      .subscribe((data) => {
       this.quizzes= this.quizzes.filter((quiz)=>quiz.qid!=qid);
        Swal.fire("success","Quiz Deleted","success");
      },
      (error) => {
        Swal.fire("error", "error", "error");
      });
    })
    
  }
  


  
}

