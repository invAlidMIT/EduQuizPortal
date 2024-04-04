import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { QuestionPaper } from '../../../model/question-paper.model';
import { QuestionPaperService } from '../../../services/question-paper.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-question-papers',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,RouterLink,CommonModule,MatFormFieldModule
  ,FormsModule,MatInputModule],
  templateUrl: './question-papers.component.html',
  styleUrl: './question-papers.component.css'
})
export class QuestionPapersComponent implements OnInit {

  questionPapers: QuestionPaper[] = [
    {
      qid: 0,
      collegeName: "",
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
      questions: [
        {
          qid: 0,
          marks: 0,
          co: "",
          btl: "",
          questionContent: "",
          questionPaper:{
            qid: 0,
            collegeName: '',
            institutionName: '',
            department: '',
            examType: '',
            semester: '',
            test: '',
            subjectCode: '',
            faculty: '',
            time: '',
            note: '',
            maxMarks: 0,
            questions: []
          }
        }
      ]
    }
  ];

  constructor(private questionPaperService: QuestionPaperService) { }

  ngOnInit(): void {
    this.getAllQuestionPapers();
  }

  getAllQuestionPapers(): void {
    this.questionPaperService.getAllQuestionPapers().subscribe(
      data => {
        this.questionPapers = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteQuestionPaper(qid:number){
    this.questionPaperService.deleteQuestionPaper(qid).subscribe((data)=>{
      this.questionPapers=this.questionPapers.filter((questionPaper)=>questionPaper.qid!=qid);
      Swal.fire("success","Question Paper Deleted","success");
    },
    (error)=>{
      Swal.fire("error","Error Occured!!","error");
      console.log(error);
    }
    )
  }

}

