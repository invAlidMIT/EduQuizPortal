import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {

 
  constructor(private http: HttpClient) {

    
   }

  public getAllQuizResults() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quizResult/all`, { headers });
  }

  public getQuizResultsOfQuiz(qid: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quizResult/quiz/${qid}`, { headers });
  }

  public saveQuizResult(quizResult: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${baseUrl}/quizResult/`, quizResult, { headers });
  }

  public deleteQuizResult(id: any){
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${baseUrl}/quizResult/${id}`, { headers });
  }

  public checkUserAttemptedQuiz(username: string, qid: any) {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${baseUrl}/quizResult/quiz/${username}/${qid}`, { headers });
  }
}