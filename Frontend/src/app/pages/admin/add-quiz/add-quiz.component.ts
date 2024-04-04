import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ThemePalette } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { CategoryService } from '../../../services/category.service';
import { QuizService } from '../../../services/quiz.service';


@Component({
  selector: 'app-add-quiz',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatListModule,MatIconModule,RouterLink,
  CommonModule,MatFormFieldModule,FormsModule,MatInputModule,MatSlideToggleModule,
   MatSelectModule],
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.css'
})
export class AddQuizComponent implements OnInit{

  constructor(private categoryService:CategoryService,private snack:MatSnackBar,
    private quizService:QuizService){}
  ngOnInit(): void {
    this.categoryService.categories().subscribe((data:any)=>{
        this.categories=data;
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error!!","error occured","error");
    }
    
    )
  }

  categories=[
    {
      cid:'',
      title:''
    }
  ]

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:true,
    category:{
      cid:'',
    }
  }

  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  public addQuiz(){
    if(this.quizData.title.trim()==null || this.quizData.title==''){
      this.snack.open("Title should not empty!!","",{
        duration:3000
      });
      return;
    }

    this.quizService.addQuiz(this.quizData).subscribe((data)=>{
        Swal.fire("Success","Quiz Added","success");
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          numberOfQuestions:'',
          active:true,
          category:{
            cid:'',
          }
        }
    },
    (error)=>{
      Swal.fire("Error","Error occured!!","error");
    })
  }
}


