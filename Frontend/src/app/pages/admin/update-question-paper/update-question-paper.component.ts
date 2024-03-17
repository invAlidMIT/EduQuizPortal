import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';
import { QuestionPaperService } from '../../../services/question-paper.service';

@Component({
  selector: 'app-update-question-paper',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,CommonModule,MatFormFieldModule
  ,FormsModule,MatInputModule],
  templateUrl: './update-question-paper.component.html',
  styleUrl: './update-question-paper.component.css'
})
export class UpdateQuestionPaperComponent implements OnInit {

  constructor(private qpService:QuestionPaperService,private router:Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    this.questionPaperId=this.route.snapshot.params['qid'];
    this.qpService.getQuestionPaperById(this.questionPaperId)
    .subscribe((data)=>{
      this.questionPaper=data;
    },
    (error)=>{
      console.log(error);
    }
    )
  }

  questionPaperId:number=0;

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
    maxMarks: 0
  }

  updateQuestionPaper(){
    this.qpService.updateQuestionPaper(this.questionPaperId,this.questionPaper).subscribe(
      (data:any)=>{
        Swal.fire("Updated","Question Paper updated","success").then((e)=>{
          this.router.navigate(["/adminDashboard/questionPapers"]);
        });
      },
      (error)=>{
        Swal.fire("Error","Error Occured!!","error");
        console.log(error);
      }
    )
  }


}
