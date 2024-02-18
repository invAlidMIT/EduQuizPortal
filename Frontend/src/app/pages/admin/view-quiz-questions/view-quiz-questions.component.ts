import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-quiz-questions',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,CommonModule
  ,MatFormFieldModule,FormsModule,MatInputModule,RouterLink],
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.css'
})
export class ViewQuizQuestionsComponent implements OnInit {

  qId: any;
  qTitle: any;
  questions=[
    {
      qid:'',
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
      quiz:{
        
      }

    }
  ];

  constructor(private route:ActivatedRoute,private questionService:QuestionService,
    private snack:MatSnackBar){}

  ngOnInit(): void {
   
    this.qId= this.route.snapshot.params['id'];
    this.qTitle= this.route.snapshot.params['title'];
    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      (data:any)=>{
        this.questions=data;
        console.log(this.questions);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  public deleteQuestion(qid:any){
    Swal.fire({
      icon:'info',
      confirmButtonText:'Delete',
      showCancelButton:true,
      title:'Are you sure ?'
    }).then((result)=>{
        if(result.isConfirmed){
          this.questionService.deleteQuestion(qid).subscribe((data)=>{
            this.snack.open("Question Deleted",'',{
              duration:3000
            });
            this.questions=this.questions.filter((q)=>q.qid!=qid);
          },
          (error)=>{
            this.snack.open("Error occured!!",'',{
              duration:3000
            })
          }
          )
        }
    })
  }

}
