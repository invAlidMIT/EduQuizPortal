import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { QuestionPaperService } from '../../../services/question-paper.service';

@Component({
  selector: 'app-add-question-paper',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,RouterLink,CommonModule,
  MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './add-question-paper.component.html',
  styleUrl: './add-question-paper.component.css'
})
export class AddQuestionPaperComponent  {

  constructor(private qpService:QuestionPaperService,private router:Router){}

  questionPaper={
    collegeName:"",
    institutionName: "",
    department: "",
    examType: "",
    semester: "",
    test: "",
    subjectCode: "",
    faculty: "",
    time: "",
    note: "",
    maxMarks: 0,
  }

  
  addQuestionPaper(){
      this.qpService.addQuestionPaper(this.questionPaper).subscribe((data)=>{
        Swal.fire("Success","Question Paper Added","success");
        this.router.navigate(['/adminDashboard/questionPapers']);
      },
      (error)=>{
        console.log(error);
      }
      )
  }



}
