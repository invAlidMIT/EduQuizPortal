import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { QuestionService } from '../../../services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatListModule,MatIconModule,MatButtonModule
  ,RouterLink,MatFormFieldModule,FormsModule,MatInputModule,MatSelectModule],
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent implements OnInit {

  qId: any;
  qTitle:any;
  questions={
    quiz:{
      qid:''
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  }

  constructor(private route:ActivatedRoute,private questionService:QuestionService,
    private snack:MatSnackBar){}
  ngOnInit(): void {
    this.qId=this.route.snapshot.params['id'];
    this.qTitle=this.route.snapshot.params['title'];
    this.questions.quiz.qid=this.qId;
    // this.questions={
    //   quiz:{
    //     qid:this.qId
    //   },
    //   content:'',
    //   option1:'',
    //   option2:'',
    //   option3:'',
    //   option4:'',
    //   answer:''
    // }
  }


  public addQuestion(){

    if(this.questions.content.trim()=='' || this.questions.content.trim()==null){
     this.snack.open("content should not be empty!!",'',{
      duration:3000
     });
      return;
    }
    if(this.questions.option2.trim()=='' || this.questions.option2.trim()==null){
      this.snack.open("Options should not be empty!!",'',{
        duration:3000
       });
      return;
    }
    if(this.questions.option3.trim()=='' || this.questions.option3.trim()==null){
      this.snack.open("Options should not be empty!!",'',{
        duration:3000
       });
      return;
    }
    if(this.questions.option4.trim()=='' || this.questions.option4.trim()==null){
      this.snack.open("Options should not be empty!!",'',{
        duration:3000
       });
      return;
    }
    if(this.questions.answer.trim()=='' || this.questions.answer.trim()==null){
      this.snack.open("Select the answer!!",'',{
        duration:3000
       });
      return;
    }


    this.questionService.addQuestion(this.questions).subscribe(
      (data:any)=>{
        Swal.fire("success","Question Added Successfully","success");
      },
      (error)=>{
        Swal.fire("error","Error Occured!!",'error');
        console.log(error);
      }
    )
  }
}
