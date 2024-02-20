import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { QuizService } from '../../../services/quiz.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-instructions',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatIconModule
  ,MatButtonModule,RouterLink],
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
  
  constructor(private route:ActivatedRoute,private quizService:QuizService,
    private router:Router){}
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

  startQuiz(){
    Swal.fire({
      title:"Dou you want to start the Quiz???",
      showDenyButton:true,
      showCancelButton:true,
      confirmButtonText:"Yes",
      denyButtonText:"No",
      icon:"info"
    }).then((result)=>{
      if(result.isConfirmed){
        this.router.navigate(["/quiz-start/"+this.qid]);
      }
    })
  }

}
