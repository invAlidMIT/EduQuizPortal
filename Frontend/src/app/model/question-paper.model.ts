import { Questions } from "./questions.model";

export class QuestionPaper {
    qid: number =0;
    collegeName: string="";
    institutionName: string="";
    department: string="";
    examType: string="";
    semester: string="";
    test: string="";
    subjectCode: string="";
    faculty: string="";
    time: string="";
    note: string="";
    maxMarks: number=0;
    questions: Questions[]=[];
  }