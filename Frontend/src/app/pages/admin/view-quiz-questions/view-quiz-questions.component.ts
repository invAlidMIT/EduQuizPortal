import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { Papa } from 'ngx-papaparse';

interface QuizQuestion {
      content:'',
      option1:'',
      option2:'',
      option3:'',
      option4:'',
      answer:'',
      quiz:{
        
      }
}

@Component({
  selector: 'app-view-quiz-questions',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,CommonModule
  ,MatFormFieldModule,FormsModule,MatInputModule,RouterLink],
  templateUrl: './view-quiz-questions.component.html',
  styleUrl: './view-quiz-questions.component.css'
})
export class ViewQuizQuestionsComponent implements OnInit {

  selectedFile: File | null = null;
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
    private snack:MatSnackBar,
    private papa: Papa,
  private router: Router
  ){}

  ngOnInit(): void {
   
    this.qId= this.route.snapshot.params['id'];
    this.qTitle= this.route.snapshot.params['title'];
    this.loadQuestions();
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

  isImporting: boolean = false;

  handleFileInput(event: any) {
    this.isImporting = true; 
    const target = event.target;
    if (target.files && target.files.length > 0) {
      this.selectedFile = target.files[0];
      this.importQuestions();
      this.isImporting = false; 
    } else {
      console.error('No file selected.');
    }
  }

  importQuestions() {
    console.log('Importing questions...');
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    console.log('Selected file:', this.selectedFile);

    this.papa.parse(this.selectedFile, {
      delimiter: '|', 
      header: true,
      complete: (result) => {
        result.data.forEach((row: any) => {
          const newQuestion: QuizQuestion = {
            content: row['Content'],
            option1: row['Option1'],
            option2: row['Option2'],
            option3: row['Option3'],
            option4: row['Option4'],
            answer: row['Answer'],
            quiz: {
              qid:this.qId
            }
          };

          if(newQuestion.content!=='' && newQuestion.content!==null){
            this.questionService.addQuestion(newQuestion).subscribe(
              (data) => {
                console.log('Question imported successfully:', data);
                this.loadQuestions();
              },
              (error) => {
                console.error('Error importing question:', error);
              }
            );
          }
         
        });
      }
    });
  }

  loadQuestions() {
    this.questionService.getQuestionsOfQuiz(this.qId).subscribe(
      (data: any) => {
        this.questions = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}



