import { QuestionPaper } from "./question-paper.model";

export class Questions {
    qid: number=0;
    marks: number=0;
    co: string="";
    btl: string="";
    questionContent: string="";
    questionPaper:QuestionPaper={
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
      questions: []
    }
    
  }