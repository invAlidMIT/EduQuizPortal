import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Questions } from '../model/questions.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private baseUrl = 'http://localhost:8080/questions'; 

  constructor(private http: HttpClient) { }

  addQuestion(question: any): Observable<Questions> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<Questions>(`${this.baseUrl}/add`, question,{headers});
  }

  updateQuestion(id: number, question: any): Observable<Questions> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<Questions>(`${this.baseUrl}/update/${id}`, question,{headers});
  }

  getAllQuestions(): Observable<Questions[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Questions[]>(`${this.baseUrl}/getAll`,{headers});
  }

  getQuestionById(qId: number): Observable<Questions> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Questions>(`${this.baseUrl}/${qId}`,{headers});
  }

  deleteQuestion(qId: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.baseUrl}/delete/${qId}`,{headers});
  }

  getQuestionsOfQuestionPaper(questionPaperId: number): Observable<Questions[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Questions[]>(`${this.baseUrl}/getByQuestionPaper/${questionPaperId}`,{headers});
  }
}