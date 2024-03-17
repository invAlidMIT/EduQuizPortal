import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionPaper } from '../model/question-paper.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionPaperService {

  private baseUrl = 'http://localhost:8080/questionPaper'; 

  constructor(private http: HttpClient) { }

  addQuestionPaper(questionPaper: any): Observable<QuestionPaper> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<QuestionPaper>(`${this.baseUrl}/add`, questionPaper,{headers});
  }

  updateQuestionPaper(id: number, questionPaper: any): Observable<QuestionPaper> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<QuestionPaper>(`${this.baseUrl}/update/${id}`, questionPaper,{headers});
  }

  getAllQuestionPapers(): Observable<QuestionPaper[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<QuestionPaper[]>(`${this.baseUrl}/getAll`,{headers});
  }

  deleteQuestionPaper(qid: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.baseUrl}/delete/${qid}`,{headers});
  }

  getQuestionPaperById(quizId: number): Observable<QuestionPaper> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<QuestionPaper>(`${this.baseUrl}/${quizId}`,{headers});
  }
}
